import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ozxwspm0a.css';
import '../../css/o/ouf_zdbvd.css';
import '../../css/d/d3_lg_bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ozxwspm0a"/><path class="ouf_zdbvd"/><path class="d3_lg_bwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:producer-portal"} {...others} />);
}

export default Component;
