import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m0c3q_bwj.css';
import '../../css/a/abrdwn46r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m0c3q_bwj"/><path class="abrdwn46r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:skip-back-fill"} {...others} />);
}

export default Component;
