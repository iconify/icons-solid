import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoc3v9b4e.css';
import '../../css/b/bdm_vlbvg.css';
import '../../css/j/jszzeeb0n.css';
import '../../css/p/p5t38hp5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eoc3v9b4e"/><path class="bdm_vlbvg"/><path class="jszzeeb0n"/><path class="p5t38hp5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filegator"} {...others} />);
}

export default Component;
