import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh2n0hprc.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="qh2n0hprc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-right"} {...others} />);
}

export default Component;
