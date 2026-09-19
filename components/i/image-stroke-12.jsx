import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mkllvbb4k.css';
import '../../css/n/n0rztxpey.css';
import '../../css/c/c147i5g9x.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="mkllvbb4k"/><path class="n0rztxpey"/></g><circle class="c147i5g9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:image-stroke-12"} {...others} />);
}

export default Component;
