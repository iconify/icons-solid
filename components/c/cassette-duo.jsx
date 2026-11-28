import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t554dkbcw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vkswx2b4p.css';
import '../../css/r/r21ausb1a.css';
import '../../css/r/rznseaccn.css';
import '../../css/a/aw7vnsxhx.css';
import '../../css/b/b2pr0e8dr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary t554dkbcw"/><g class="dt0cm9dhy primary"><path class="vkswx2b4p"/><path class="r21ausb1a"/><path class="rznseaccn"/><path class="aw7vnsxhx"/><path class="b2pr0e8dr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cassette-duo"} {...others} />);
}

export default Component;
