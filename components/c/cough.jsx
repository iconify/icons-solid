import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr7ghh79r.css';
import '../../css/d/de_z1ibok.css';
import '../../css/m/mowsr8bxn.css';
import '../../css/l/laf24vzlh.css';
import '../../css/p/pmr8ioscg.css';
import '../../css/l/lt1tc0r_w.css';
import '../../css/w/wyzehsq6r.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nr7ghh79r"/><circle class="de_z1ibok"/><circle class="mowsr8bxn"/><circle class="laf24vzlh"/><circle class="pmr8ioscg"/><circle class="lt1tc0r_w"/><circle class="wyzehsq6r"/><path class="i2ck-cb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cough"} {...others} />);
}

export default Component;
