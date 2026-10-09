import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odlpk9b9a.css';
import '../../css/w/wpnkgb6ix.css';
import '../../css/o/omnhf8jcb.css';
import '../../css/e/e-lp3bbub.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="odlpk9b9a"/><path class="wpnkgb6ix"/><path class="omnhf8jcb"/><path class="e-lp3bbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-storage-48-bold"} {...others} />);
}

export default Component;
