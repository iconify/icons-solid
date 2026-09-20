import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhcb065st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hhcb065st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sidebar-line-left"} {...others} />);
}

export default Component;
