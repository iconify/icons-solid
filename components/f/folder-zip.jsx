import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/h445vw.css';
import '../../css/l/l6j71m.css';
import '../../css/w/wpioji.css';
import '../../css/g/ggh1oi.css';
import '../../css/k/kcr6_t.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c h445vw"/><path class="a0m25c l6j71m"/><path class="a0m25c wpioji"/><path class="a0m25c ggh1oi"/><path class="a0m25c kcr6_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-zip"} {...others} />);
}

export default Component;
