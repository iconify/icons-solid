import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bo9eyfb6n.css';
import '../../css/p/pqm3hzbbw.css';
import '../../css/s/sakh24bxz.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="bo9eyfb6n"/><path class="pqm3hzbbw"/><path class="sakh24bxz"/><path class="c1t--rtgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:joystick"} {...others} />);
}

export default Component;
