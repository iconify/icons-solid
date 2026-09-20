import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agg9pqd4e.css';
import '../../css/j/jg48bhslv.css';
import '../../css/c/c3jnmq10t.css';
import '../../css/z/zuzj69bla.css';
import '../../css/p/p_6r_3b-e.css';
import '../../css/j/jo3429-_r.css';
import '../../css/r/r006p0btz.css';

const viewBox = {"width":140.625,"height":140.625};
const content = `<path class="agg9pqd4e"/><path class="jg48bhslv"/><path class="c3jnmq10t"/><path class="zuzj69bla"/><path class="p_6r_3b-e"/><path class="jo3429-_r"/><path class="r006p0btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:owasp-dependency-check"} {...others} />);
}

export default Component;
