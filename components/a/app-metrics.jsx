import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onth24bvb.css';
import '../../css/q/qaw1fhbip.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="onth24bvb"/><path class="ouiIcon__fillSecondary qaw1fhbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-metrics"} {...others} />);
}

export default Component;
