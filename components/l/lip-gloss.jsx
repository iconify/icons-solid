import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/haoy1x21t.css';
import '../../css/o/o-a42bbih.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/n/nh4beurhc.css';
import '../../css/p/p5-mijbop.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="haoy1x21t"/><path class="o-a42bbih"/><path class="cz-xh6lnw"/><path class="nh4beurhc"/><rect class="p5-mijbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lip-gloss"} {...others} />);
}

export default Component;
