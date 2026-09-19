import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue0_fhfrg.css';
import '../../css/k/k794i539p.css';
import '../../css/p/p1ohgkcui.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ue0_fhfrg"/><path class="k794i539p"/><path class="p1ohgkcui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-handicap"} {...others} />);
}

export default Component;
