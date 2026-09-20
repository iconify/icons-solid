import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moh21tptg.css';
import '../../css/o/o72bh4q6z.css';
import '../../css/c/c5142wicy.css';
import '../../css/x/x0isxmtro.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="moh21tptg"/><path class="o72bh4q6z"/><path clip-rule="evenodd" class="c5142wicy"/><path class="x0isxmtro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plikshare"} {...others} />);
}

export default Component;
