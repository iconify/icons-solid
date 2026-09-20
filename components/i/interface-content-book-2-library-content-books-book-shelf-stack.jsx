import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qxx06lb9u.css';
import '../../css/r/rle9fyo4y.css';
import '../../css/p/psl9hvbey.css';
import '../../css/c/co15anbqk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="qxx06lb9u"/><rect class="rle9fyo4y"/><rect transform="rotate(-14.05 10.779 7.795)" class="psl9hvbey"/><path class="co15anbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-book-2-library-content-books-book-shelf-stack"} {...others} />);
}

export default Component;
