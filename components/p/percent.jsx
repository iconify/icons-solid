import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g54yjpf3n.css';
import '../../css/n/nupiyuvfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g54yjpf3n"/><path class="nupiyuvfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:percent"} {...others} />);
}

export default Component;
