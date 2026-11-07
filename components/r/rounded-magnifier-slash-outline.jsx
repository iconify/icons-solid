import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a501rabcl.css';
import '../../css/n/n_sy2m0fq.css';
import '../../css/p/ppn0rybgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a501rabcl"/><path class="n_sy2m0fq"/><path clip-rule="evenodd" class="ppn0rybgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-slash-outline"} {...others} />);
}

export default Component;
