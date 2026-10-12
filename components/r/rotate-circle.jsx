import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bld59pbwq.css';
import '../../css/u/u2xrtbbac.css';
import '../../css/k/krd881dju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bld59pbwq"/><path class="u2xrtbbac"/><path class="krd881dju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-circle"} {...others} />);
}

export default Component;
