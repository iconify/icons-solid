import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zob6rkzyb.css';
import '../../css/r/r5q-9ib0i.css';
import '../../css/j/jck9mcb1g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zob6rkzyb"/><path class="r5q-9ib0i"/><path class="jck9mcb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:anchor-one"} {...others} />);
}

export default Component;
