import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy6xjobjq.css';
import '../../css/x/xnufw5bpr.css';
import '../../css/n/n7i-w0bkc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qy6xjobjq"/><path class="xnufw5bpr"/><path class="n7i-w0bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:check-valve-48-bold"} {...others} />);
}

export default Component;
