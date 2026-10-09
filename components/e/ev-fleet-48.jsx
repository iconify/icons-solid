import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxupk9b3y.css';
import '../../css/s/s7jpndbov.css';
import '../../css/l/l22o7lgsh.css';
import '../../css/w/wje_iebly.css';
import '../../css/d/do9nlqb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pxupk9b3y"/><path class="s7jpndbov"/><path class="l22o7lgsh"/><path class="wje_iebly"/><path class="do9nlqb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-fleet-48"} {...others} />);
}

export default Component;
