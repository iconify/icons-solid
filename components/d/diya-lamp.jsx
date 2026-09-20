import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq80vsb8f.css';
import '../../css/g/g9kdv_asi.css';
import '../../css/r/rxarm1gqe.css';
import '../../css/b/b31870eua.css';
import '../../css/f/f92tnizue.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/n/nl1fejbda.css';
import '../../css/c/ct3r9qbus.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qq80vsb8f"/><path class="g9kdv_asi"/><path class="rxarm1gqe"/><path class="b31870eua"/><path class="f92tnizue"/><g class="rpvb-o6bq"><path class="nl1fejbda"/><path class="ct3r9qbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:diya-lamp"} {...others} />);
}

export default Component;
