import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_rd1qb4t.css';
import '../../css/h/h9o_00b4f.css';
import '../../css/i/inwwqc7mq.css';
import '../../css/n/noixt5w3f.css';
import '../../css/p/pxgzmifcg.css';
import '../../css/m/ms4dadeix.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_rd1qb4t"/><path class="h9o_00b4f"/><path class="inwwqc7mq"/><path class="noixt5w3f"/><path class="pxgzmifcg"/><path class="ms4dadeix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-48-bold"} {...others} />);
}

export default Component;
