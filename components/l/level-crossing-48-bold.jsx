import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugiqnwbua.css';
import '../../css/w/w7y3w7blm.css';
import '../../css/g/gdsoirb5d.css';
import '../../css/n/n545enbdt.css';
import '../../css/i/i4twrrq4g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ugiqnwbua"/><path class="w7y3w7blm"/><path class="gdsoirb5d"/><path class="n545enbdt"/><path class="i4twrrq4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-crossing-48-bold"} {...others} />);
}

export default Component;
