import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtgv8-bzl.css';
import '../../css/v/v4bnoj-6z.css';
import '../../css/i/iturx2siu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtgv8-bzl"/><path class="v4bnoj-6z"/><path class="iturx2siu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:image-v"} {...others} />);
}

export default Component;
