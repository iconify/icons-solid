import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mdv0qppql.css';
import '../../css/v/vpp8cv3zx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mdv0qppql"/><path class="vpp8cv3zx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:apigee-api-platform"} {...others} />);
}

export default Component;
