import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uazkj_b2c.css';
import '../../css/t/te2i2kjzd.css';
import '../../css/r/ro-0xob8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="uazkj_b2c"/><path class="te2i2kjzd"/><path class="ro-0xob8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:figma-logo"} {...others} />);
}

export default Component;
