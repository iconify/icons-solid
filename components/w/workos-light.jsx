import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smc74qbot.css';
import '../../css/u/u65_2lbpv.css';

const viewBox = {"width":55.4,"height":48};
const content = `<path class="smc74qbot"/><path class="u65_2lbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:workos-light"} {...others} />);
}

export default Component;
