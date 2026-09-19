import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecr-dlbow.css';
import '../../css/m/md286fbip.css';
import '../../css/x/x8iyrebzj.css';
import '../../css/n/nc0pyhlto.css';
import '../../css/p/ph-5sqrly.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ecr-dlbow"/><g class="md286fbip"><path class="x8iyrebzj"/><path class="nc0pyhlto"/><path class="ph-5sqrly"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:pre"} {...others} />);
}

export default Component;
