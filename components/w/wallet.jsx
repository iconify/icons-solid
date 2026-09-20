import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi1izbb6k.css';
import '../../css/p/pwhd70axe.css';
import '../../css/w/wyqpkw8hp.css';
import '../../css/j/jpb4h6j8x.css';
import '../../css/z/zlq84lb8p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vi1izbb6k"/><path clip-rule="evenodd" class="pwhd70axe"/><path class="wyqpkw8hp"/><path class="jpb4h6j8x"/><path class="zlq84lb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wallet"} {...others} />);
}

export default Component;
