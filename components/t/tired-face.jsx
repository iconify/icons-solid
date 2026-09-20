import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn27xeyvd.css';
import '../../css/z/ztni599nj.css';
import '../../css/n/n2_771bjc.css';
import '../../css/a/a6gyunkev.css';
import '../../css/d/drphy1bum.css';
import '../../css/k/k3rh4gb-e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zn27xeyvd"/><g class="ztni599nj"><circle class="n2_771bjc"/><path class="a6gyunkev"/><path class="drphy1bum"/><path class="k3rh4gb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tired-face"} {...others} />);
}

export default Component;
