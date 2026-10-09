import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itv0f-bax.css';
import '../../css/n/ncx05ab2q.css';
import '../../css/t/tthe00koa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itv0f-bax"/><path class="ncx05ab2q"/><path class="tthe00koa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:import-export-20-bold"} {...others} />);
}

export default Component;
