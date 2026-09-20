import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex0s3vbnf.css';
import '../../css/r/r_h209w2p.css';
import '../../css/z/zjj4vacsc.css';
import '../../css/a/ap7vavbqo.css';
import '../../css/t/tsvawbckg.css';
import '../../css/w/wmt4bxbwg.css';
import '../../css/a/ail-4-b_z.css';
import '../../css/f/fiswgra1w.css';
import '../../css/p/pznj1fbze.css';
import '../../css/j/j11izvbss.css';
import '../../css/e/euh8hobpr.css';

const viewBox = {"width":80,"height":70};
const content = `<path class="ex0s3vbnf"/><path class="r_h209w2p"/><path class="zjj4vacsc"/><path class="ap7vavbqo"/><path class="tsvawbckg"/><path class="wmt4bxbwg"/><path class="ail-4-b_z"/><path class="fiswgra1w"/><path class="pznj1fbze"/><path class="j11izvbss"/><path class="euh8hobpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bun"} {...others} />);
}

export default Component;
