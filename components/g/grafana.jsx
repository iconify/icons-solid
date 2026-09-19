import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2_1oxfmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2_1oxfmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:grafana"} {...others} />);
}

export default Component;
