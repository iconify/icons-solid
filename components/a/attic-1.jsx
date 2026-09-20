import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut1a-vb5f.css';
import '../../css/t/t3w9i39ua.css';
import '../../css/p/plnhhokme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ut1a-vb5f"/><path class="t3w9i39ua"/><path class="plnhhokme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:attic-1"} {...others} />);
}

export default Component;
