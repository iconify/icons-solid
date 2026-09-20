import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpk98bbzf.css';
import '../../css/a/aekvfuqpv.css';
import '../../css/o/o6vxk8b3w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gpk98bbzf"/><path class="aekvfuqpv"/><path class="o6vxk8b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:framadate"} {...others} />);
}

export default Component;
