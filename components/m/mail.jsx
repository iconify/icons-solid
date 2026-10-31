import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/weo9vnbgh.css';
import '../../css/b/b0vrlib6h.css';
import '../../css/c/cd1yi91ez.css';
import '../../css/f/f88gcobup.css';
import '../../css/h/hbfe0bbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="weo9vnbgh wm-shadow"/><path class="b0vrlib6h wm-shadow"/><path class="cd1yi91ez"/><path class="f88gcobup"/><path class="hbfe0bbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mail"} {...others} />);
}

export default Component;
