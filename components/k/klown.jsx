import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za--gks2g.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i6oojlb1f.css';
import '../../css/p/puadfrbkz.css';
import '../../css/n/n0jgb0b0f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="za--gks2g"/><g class="md286fbip"><path class="i6oojlb1f"/><path class="puadfrbkz"/><path class="n0jgb0b0f"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:klown"} {...others} />);
}

export default Component;
