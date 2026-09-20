import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rqmue42ie.css';
import '../../css/d/dk6z82bvg.css';
import '../../css/v/vvl6uk22v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rqmue42ie"/><path class="dk6z82bvg"/><path class="vvl6uk22v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-jira"} {...others} />);
}

export default Component;
