import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/norrpj21j.css';
import '../../css/t/tf9aq1qjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="norrpj21j"/><path class="tf9aq1qjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wrench-fill"} {...others} />);
}

export default Component;
