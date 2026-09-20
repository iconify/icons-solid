import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snqhqacax.css';
import '../../css/v/vh06-4bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="snqhqacax"/><path class="vh06-4bmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-cohort"} {...others} />);
}

export default Component;
