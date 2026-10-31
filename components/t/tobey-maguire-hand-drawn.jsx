import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dl15zqbqv.css';
import '../../css/c/cst1swbui.css';
import '../../css/a/a76f2_b-b.css';
import '../../css/a/a6c4b3bpr.css';
import '../../css/e/el8o9ybiz.css';
import '../../css/u/u6zrl3ycm.css';
import '../../css/b/bo6r2c3yw.css';
import '../../css/n/nlec2bcky.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dl15zqbqv"/><path class="cst1swbui"/><path class="a76f2_b-b"/><path class="a6c4b3bpr"/><path class="el8o9ybiz"/><path class="u6zrl3ycm"/><path class="bo6r2c3yw"/><path class="nlec2bcky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:tobey-maguire-hand-drawn"} {...others} />);
}

export default Component;
