import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhrqm3bvg.css';
import '../../css/l/l1g8ht9pf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nhrqm3bvg"/><path class="l1g8ht9pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-square-rounded"} {...others} />);
}

export default Component;
