import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dak927fpw.css';
import '../../css/g/gbl322bwz.css';
import '../../css/p/p8-zntblb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dak927fpw"/><path class="gbl322bwz"/><path class="p8-zntblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-leak-48-bold"} {...others} />);
}

export default Component;
