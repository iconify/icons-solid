import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-6-3wb8q.css';
import '../../css/t/tq2sz7nhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u-6-3wb8q"/><path class="tq2sz7nhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-forward-up-double"} {...others} />);
}

export default Component;
