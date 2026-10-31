import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arptzobve.css';
import '../../css/a/aey1x7bcf.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="arptzobve"/><path class="aey1x7bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:monaco"} {...others} />);
}

export default Component;
