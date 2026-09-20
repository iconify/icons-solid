import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsc74_zyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsc74_zyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-circle-stroke-filled"} {...others} />);
}

export default Component;
