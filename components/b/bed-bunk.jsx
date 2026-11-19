import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0fy7du1b.css';
import '../../css/z/zm2tl2bch.css';
import '../../css/g/gdxk1qbnb.css';
import '../../css/m/m8-yl2b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y0fy7du1b"/><path class="zm2tl2bch"/><path clip-rule="evenodd" class="gdxk1qbnb"/><path class="m8-yl2b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bed-bunk"} {...others} />);
}

export default Component;
