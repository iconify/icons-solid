import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z1x97_b4b.css';
import '../../css/b/betfvzsib.css';
import '../../css/g/g9oapubhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z1x97_b4b"/><path class="betfvzsib"/><path class="g9oapubhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coffee"} {...others} />);
}

export default Component;
