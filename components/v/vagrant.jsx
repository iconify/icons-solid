import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i96mgiblb.css';
import '../../css/u/uj6e1ab-d.css';

const viewBox = {"width":140.625,"height":140.625};
const content = `<path class="i96mgiblb"/><path class="uj6e1ab-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vagrant"} {...others} />);
}

export default Component;
