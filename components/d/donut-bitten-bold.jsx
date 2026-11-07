import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4wd7-nbs.css';
import '../../css/j/jrqzroung.css';
import '../../css/x/xbekolb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4wd7-nbs"/><path class="jrqzroung"/><path clip-rule="evenodd" class="xbekolb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bitten-bold"} {...others} />);
}

export default Component;
