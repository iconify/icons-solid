import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubhv2wblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubhv2wblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:music-2-filled"} {...others} />);
}

export default Component;
