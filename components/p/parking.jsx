import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y9bmozbil.css';
import '../../css/r/r77yemz5v.css';
import '../../css/e/egd_hebsu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="y9bmozbil"/><path class="r77yemz5v"/><path class="egd_hebsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:parking"} {...others} />);
}

export default Component;
