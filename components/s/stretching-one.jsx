import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8r7mgbbj.css';
import '../../css/u/ui9-jtblu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="r8r7mgbbj"/><path class="ui9-jtblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stretching-one"} {...others} />);
}

export default Component;
