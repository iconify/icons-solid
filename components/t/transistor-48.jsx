import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu8nygbvh.css';
import '../../css/x/xyjx8qb8q.css';
import '../../css/m/m9bq4cboz.css';
import '../../css/f/ft2875bpd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hu8nygbvh"/><path class="xyjx8qb8q"/><path class="m9bq4cboz"/><path class="ft2875bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transistor-48"} {...others} />);
}

export default Component;
