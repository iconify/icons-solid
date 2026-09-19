import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn5ie-bfc.css';
import '../../css/y/y1lscctme.css';
import '../../css/p/pm4oodhmv.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="bn5ie-bfc"/><path class="y1lscctme"/><path class="pm4oodhmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:dna"} {...others} />);
}

export default Component;
