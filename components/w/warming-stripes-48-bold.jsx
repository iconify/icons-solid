import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4t77hbzd.css';
import '../../css/d/djucoz9_s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e4t77hbzd"/><path class="djucoz9_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warming-stripes-48-bold"} {...others} />);
}

export default Component;
