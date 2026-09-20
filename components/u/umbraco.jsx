import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efg_z3lhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efg_z3lhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:umbraco"} {...others} />);
}

export default Component;
