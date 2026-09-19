import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opaq2dbry.css';
import '../../css/r/rqqek-bmd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="opaq2dbry"/><path class="rqqek-bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-alerting"} {...others} />);
}

export default Component;
