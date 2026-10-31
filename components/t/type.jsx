import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/ty2upabki.css';
import '../../css/a/a-zbi3bjx.css';
import '../../css/i/i5lay3b9t.css';
import '../../css/b/bbz2ti0md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ty2upabki wm-shadow"/><path class="a-zbi3bjx wm-shadow"/><path class="i5lay3b9t"/><path class="bbz2ti0md"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:type"} {...others} />);
}

export default Component;
