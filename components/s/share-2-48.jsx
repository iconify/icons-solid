import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5jpf8r7p.css';
import '../../css/c/ctxjx93qy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t5jpf8r7p"/><path class="ctxjx93qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-2-48"} {...others} />);
}

export default Component;
