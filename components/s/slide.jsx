import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/il841_eem.css';
import '../../css/o/o-om9db6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="il841_eem"/><path class="o-om9db6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:slide"} {...others} />);
}

export default Component;
