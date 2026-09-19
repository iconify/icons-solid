import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwlercjan.css';
import '../../css/a/as_el_bcn.css';
import '../../css/c/cbdyhq4wv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="iwlercjan"/><path class="as_el_bcn"/><path class="cbdyhq4wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:battery-working-one"} {...others} />);
}

export default Component;
