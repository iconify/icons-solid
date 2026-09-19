import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htgbsacnp.css';
import '../../css/y/ypfktcc0d.css';
import '../../css/d/dd9yyy66g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htgbsacnp"/><path class="ypfktcc0d"/><path class="dd9yyy66g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:news"} {...others} />);
}

export default Component;
