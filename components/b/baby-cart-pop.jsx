import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/p/p8mof3bvf.css';
import '../../css/o/o3-d1tbot.css';
import '../../css/e/ew65pob1m.css';
import '../../css/h/hlba1lz0t.css';
import '../../css/a/aaoe8b3ko.css';
import '../../css/o/ol95o9bjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="p8mof3bvf"/><path class="o3-d1tbot"/><path class="ew65pob1m"/><path class="hlba1lz0t"/><path class="aaoe8b3ko"/><path class="ol95o9bjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:baby-cart-pop"} {...others} />);
}

export default Component;
