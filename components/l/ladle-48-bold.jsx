import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oshhv4dvv.css';
import '../../css/o/ohv239ijk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oshhv4dvv"/><path class="ohv239ijk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladle-48-bold"} {...others} />);
}

export default Component;
