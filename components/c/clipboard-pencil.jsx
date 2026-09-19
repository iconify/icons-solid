import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2auhh-bp.css';
import '../../css/v/vwi05mrad.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="a2auhh-bp"/><path class="vwi05mrad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:clipboard-pencil"} {...others} />);
}

export default Component;
