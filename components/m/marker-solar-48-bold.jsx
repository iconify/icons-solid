import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etlms99xu.css';
import '../../css/z/zlhvgcb_b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="etlms99xu"/><path class="zlhvgcb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-solar-48-bold"} {...others} />);
}

export default Component;
