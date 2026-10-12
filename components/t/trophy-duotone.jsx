import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y12q2vtuk.css';
import '../../css/n/nq6r5xbvz.css';
import '../../css/f/flapbtbyv.css';
import '../../css/t/tyb6j0bqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y12q2vtuk"/><path class="nq6r5xbvz"/><path class="flapbtbyv"/><path class="tyb6j0bqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:trophy-duotone"} {...others} />);
}

export default Component;
