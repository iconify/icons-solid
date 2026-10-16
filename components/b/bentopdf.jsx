import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qirrawbdw.css';
import '../../css/o/odcemnnsx.css';
import '../../css/f/f0t8eobay.css';
import '../../css/n/n40awujht.css';

const viewBox = {"width":166,"height":166};
const content = `<g class="ft5dv1b6b"><circle class="qirrawbdw"/><path class="odcemnnsx"/><path class="f0t8eobay"/><path class="n40awujht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bentopdf"} {...others} />);
}

export default Component;
