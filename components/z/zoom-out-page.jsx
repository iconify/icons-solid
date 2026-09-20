import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nf88nbcws.css';
import '../../css/b/b0px3ts2v.css';
import '../../css/f/f_b-p1bjq.css';
import '../../css/i/i6ruy398b.css';
import '../../css/h/hk9i6mk5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nf88nbcws"/><path class="b0px3ts2v"/><path class="f_b-p1bjq"/><path class="i6ruy398b"/><path class="hk9i6mk5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:zoom-out-page"} {...others} />);
}

export default Component;
