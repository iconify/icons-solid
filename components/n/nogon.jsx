import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl5bj2m7i.css';
import '../../css/z/zq22zks8c.css';
import '../../css/j/jz98-fb_u.css';
import '../../css/h/hgpj1lw8u.css';
import '../../css/r/r5m7ms6tg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yl5bj2m7i"/><path class="zq22zks8c"/><path class="jz98-fb_u"/><path class="hgpj1lw8u"/><path class="r5m7ms6tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nogon"} {...others} />);
}

export default Component;
