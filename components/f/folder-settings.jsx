import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/h445vw.css';
import '../../css/l/l6j71m.css';
import '../../css/n/nsbucn.css';
import '../../css/j/joz4ju.css';
import '../../css/s/saqx7q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c h445vw"/><path class="a0m25c l6j71m"/><path class="a0m25c nsbucn"/><path class="a0m25c joz4ju"/><path class="a0m25c saqx7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-settings"} {...others} />);
}

export default Component;
