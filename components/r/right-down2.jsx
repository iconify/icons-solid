import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azscm5t4y.css';
import '../../css/q/qqfentbum.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azscm5t4y"/><path class="qqfentbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:right-down2"} {...others} />);
}

export default Component;
