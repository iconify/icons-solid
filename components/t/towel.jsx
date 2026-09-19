import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/j/jah8xlb5c.css';
import '../../css/j/j1mhik9ml.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="jah8xlb5c"/><path class="j1mhik9ml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:towel"} {...others} />);
}

export default Component;
