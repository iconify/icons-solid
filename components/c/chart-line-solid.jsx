import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv1mxrgyg.css';
import '../../css/h/h2tie5wrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv1mxrgyg"/><path class="h2tie5wrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:chart-line-solid"} {...others} />);
}

export default Component;
