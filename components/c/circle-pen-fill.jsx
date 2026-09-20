import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugvjznb6m.css';
import '../../css/a/aamgpqbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ugvjznb6m"/><path class="aamgpqbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-pen-fill"} {...others} />);
}

export default Component;
