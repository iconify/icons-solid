import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phu1k1bve.css';
import '../../css/o/opwjgvbcu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="phu1k1bve"/><path class="opwjgvbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cline"} {...others} />);
}

export default Component;
