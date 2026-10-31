import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t7-yw95zu.css';
import '../../css/b/bkfu-xbch.css';
import '../../css/u/urapqlbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t7-yw95zu wm-shadow"/><path class="bkfu-xbch wm-shadow"/><path class="urapqlbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:align-justify"} {...others} />);
}

export default Component;
