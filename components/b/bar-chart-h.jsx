import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvd31abxp.css';
import '../../css/w/wvhlhkrav.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nvd31abxp"/><path class="wvhlhkrav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bar-chart-h"} {...others} />);
}

export default Component;
