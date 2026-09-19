import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/w/w033lebyr.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/n/nbn0cnlzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><circle class="w033lebyr"/><circle class="mprl4mbnb"/><circle class="nbn0cnlzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:more-two"} {...others} />);
}

export default Component;
