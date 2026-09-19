import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ys6tbkblj.css';
import '../../css/k/k76fe_bot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ys6tbkblj"/><path class="k76fe_bot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:send-one"} {...others} />);
}

export default Component;
