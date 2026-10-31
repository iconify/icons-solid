import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k917d4bou.css';
import '../../css/y/yddab4ber.css';
import '../../css/p/p7ct5pm2p.css';
import '../../css/e/eywhs0bnc.css';
import '../../css/o/o9p1zzt3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="k917d4bou wm-shadow"/><path class="wm-shadow yddab4ber"/><path class="p7ct5pm2p"/><path class="eywhs0bnc"/><path class="o9p1zzt3p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clock-check"} {...others} />);
}

export default Component;
