import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/elb8eobta.css';
import '../../css/b/b8dsx7j7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="elb8eobta"/><path class="b8dsx7j7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:gift"} {...others} />);
}

export default Component;
