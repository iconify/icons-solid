import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n-7cw7b1t.css';
import '../../css/p/pau5b2f0a.css';
import '../../css/z/zbp8r9b5n.css';
import '../../css/c/cvzi6sbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n-7cw7b1t wm-shadow"/><path class="pau5b2f0a wm-shadow"/><path class="zbp8r9b5n"/><path class="cvzi6sbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gingerbread-man"} {...others} />);
}

export default Component;
