import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ypq84ib1f.css';
import '../../css/z/zz8y8qwjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ypq84ib1f"/><path class="zz8y8qwjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:curve-adjustment"} {...others} />);
}

export default Component;
