import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ignec6b8h.css';
import '../../css/e/edgg_m-zr.css';
import '../../css/e/eyrktq3-q.css';
import '../../css/l/lo6d6knyb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ignec6b8h"/><path class="edgg_m-zr"/><path class="eyrktq3-q"/><path class="lo6d6knyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:eritrea"} {...others} />);
}

export default Component;
