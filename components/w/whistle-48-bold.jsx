import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o787acb6i.css';
import '../../css/u/u-8yf-b3q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o787acb6i"/><path class="u-8yf-b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whistle-48-bold"} {...others} />);
}

export default Component;
