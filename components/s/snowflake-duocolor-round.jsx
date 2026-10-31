import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gw5inactd.css';
import '../../css/p/prboy499u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gw5inactd"/><path class="prboy499u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:snowflake-duocolor-round"} {...others} />);
}

export default Component;
