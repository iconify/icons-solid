import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzghodlei.css';
import '../../css/f/f9yyg-b3m.css';
import '../../css/u/uys2z4s7k.css';
import '../../css/r/r1tlpd6cz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dzghodlei"/><path class="f9yyg-b3m"/><path class="uys2z4s7k"/><path class="r1tlpd6cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rspec"} {...others} />);
}

export default Component;
