import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-c_0r8kw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-c_0r8kw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:speechless-filled"} {...others} />);
}

export default Component;
