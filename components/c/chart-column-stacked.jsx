import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m8t98nbfb.css';
import '../../css/f/f0mlzybpd.css';
import '../../css/r/rxzaf1bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m8t98nbfb"/><rect class="f0mlzybpd"/><rect class="rxzaf1bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-column-stacked"} {...others} />);
}

export default Component;
