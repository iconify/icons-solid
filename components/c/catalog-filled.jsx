import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu_tt__st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu_tt__st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:catalog-filled"} {...others} />);
}

export default Component;
