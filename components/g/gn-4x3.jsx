import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/c/c1yjnaccy.css';
import '../../css/f/f1--t6a0g.css';
import '../../css/e/eyrc--b5n.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="c1yjnaccy"/><path class="f1--t6a0g"/><path class="eyrc--b5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gn-4x3"} {...others} />);
}

export default Component;
