import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdscwbbge.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/m/moyuhzd7x.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG71az5b1L" class="sdscwbbge"/></defs><g class="ft5dv1b6b"><path class="ocos3pbek"/><use href="#SVG71az5b1L"/><use href="#SVG71az5b1L" class="av3m8fbrw"/><path class="moyuhzd7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-3"} {...others} />);
}

export default Component;
