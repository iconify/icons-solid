import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mq8edhbqg.css';
import '../../css/m/m-ojbcwmy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="mq8edhbqg"/><path class="m-ojbcwmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shopping-bag-one"} {...others} />);
}

export default Component;
