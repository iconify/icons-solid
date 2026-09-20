import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scpdkmq3k.css';
import '../../css/y/yst55_15i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="scpdkmq3k"/><path class="yst55_15i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:verilog"} {...others} />);
}

export default Component;
