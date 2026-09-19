import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f2c8bvbnp.css';
import '../../css/a/a_r8tk11v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="f2c8bvbnp"/><path class="a_r8tk11v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:taurus"} {...others} />);
}

export default Component;
