import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlyg5ji_q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tlyg5ji_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:bicycle-repair"} {...others} />);
}

export default Component;
