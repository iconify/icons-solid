import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwldzvb5c.css';
import '../../css/s/spys-wb5e.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="rwldzvb5c"/><path class="spys-wb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:first-aid-alt"} {...others} />);
}

export default Component;
