import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pebxd96xp.css';
import '../../css/d/dfunt2aqf.css';
import '../../css/j/jopaj-b9g.css';
import '../../css/f/f60yx32es.css';
import '../../css/t/t57os687o.css';

const viewBox = {"width":24,"height":24};
const content = `<rect transform="rotate(180 12 5)" class="pebxd96xp"/><rect transform="rotate(90 19 6)" class="dfunt2aqf"/><rect transform="rotate(90 5 6)" class="jopaj-b9g"/><path class="f60yx32es"/><path class="t57os687o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:upload-fill"} {...others} />);
}

export default Component;
