import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcuc6fbtx.css';
import '../../css/t/tr1yy1b0h.css';
import '../../css/a/ao630jb1n.css';
import '../../css/j/j5p651bbv.css';
import '../../css/b/b2vpz7b9s.css';
import '../../css/u/umdyk_b7u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rcuc6fbtx"/><path class="tr1yy1b0h"/><path class="ao630jb1n"/><path class="j5p651bbv"/><path class="b2vpz7b9s"/><path class="umdyk_b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-bike-20-bold"} {...others} />);
}

export default Component;
