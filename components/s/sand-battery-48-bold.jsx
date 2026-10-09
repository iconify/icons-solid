import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do0i9ubhw.css';
import '../../css/s/so-0z5bnb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="do0i9ubhw"/><path class="so-0z5bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sand-battery-48-bold"} {...others} />);
}

export default Component;
