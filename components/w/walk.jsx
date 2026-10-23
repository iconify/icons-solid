import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9p-qb1b.css';
import '../../css/f/f3km4hxoo.css';
import '../../css/p/pkwgfabuo.css';
import '../../css/j/j8dtcoztf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="vf9p-qb1b"/><circle class="f3km4hxoo"/><path class="pkwgfabuo"/><path class="j8dtcoztf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:walk"} {...others} />);
}

export default Component;
