import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6ros9nur.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/x/xt_a157cz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i6ros9nur"/><circle class="c8kuy_ape"/><path class="xt_a157cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:instance-classic"} {...others} />);
}

export default Component;
