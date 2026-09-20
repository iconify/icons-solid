import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ye90_879w.css';
import '../../css/y/yqqt7zbbu.css';
import '../../css/s/sqeg1cc7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ye90_879w"/><path class="yqqt7zbbu"/><path class="sqeg1cc7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:michelin-bib-gourmand"} {...others} />);
}

export default Component;
