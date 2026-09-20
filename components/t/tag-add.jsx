import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqd875bhp.css';
import '../../css/o/orj139bgi.css';
import '../../css/a/ao-hsebgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(-45 8.658 6.738)" class="qqd875bhp"/><path class="orj139bgi"/><path clip-rule="evenodd" class="ao-hsebgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tag-add"} {...others} />);
}

export default Component;
