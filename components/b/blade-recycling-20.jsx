import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lord7rwpc.css';
import '../../css/s/srp1dmbec.css';
import '../../css/n/nuv2zkaui.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lord7rwpc"/><path class="srp1dmbec"/><path class="nuv2zkaui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-recycling-20"} {...others} />);
}

export default Component;
