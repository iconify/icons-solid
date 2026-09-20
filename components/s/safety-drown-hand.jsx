import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wasgbopjv.css';
import '../../css/a/a6kooab0m.css';
import '../../css/t/tup6i5txz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wasgbopjv"/><path class="a6kooab0m"/><path class="tup6i5txz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:safety-drown-hand"} {...others} />);
}

export default Component;
