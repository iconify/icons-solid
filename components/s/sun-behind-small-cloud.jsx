import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzx0n4bah.css';
import '../../css/u/uaf5xjb-s.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/d3lxfibzu.css';
import '../../css/m/msbwwgivf.css';
import '../../css/p/pdjiv277h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dzx0n4bah"/><path class="uaf5xjb-s"/><g class="jn8qy4bru"><path class="d3lxfibzu"/><path class="msbwwgivf"/><path class="pdjiv277h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sun-behind-small-cloud"} {...others} />);
}

export default Component;
