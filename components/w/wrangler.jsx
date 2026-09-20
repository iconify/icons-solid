import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi269-bum.css';
import '../../css/r/rk3z2_bxe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yi269-bum"/><path class="rk3z2_bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:wrangler"} {...others} />);
}

export default Component;
