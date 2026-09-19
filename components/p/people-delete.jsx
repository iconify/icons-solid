import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uocdgacuo.css';
import '../../css/f/fvx1854ux.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uocdgacuo"/><path class="fvx1854ux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-delete"} {...others} />);
}

export default Component;
