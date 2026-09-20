import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz_aku.css';
import '../../css/t/t5pxry.css';
import '../../css/h/hox66x.css';
import '../../css/u/u63-fz.css';
import '../../css/c/car43j.css';
import '../../css/z/z57xpz.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-cfpe7y.css';
import '../../css/d/d-p1facq.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGvqTGkdkz"><path class="pz_aku t5pxry"/><path class="hox66x t5pxry u63-fz"/><path class="car43j t5pxry u63-fz"/><path class="z57xpz"/></mask></defs><path mask="url(#SVGvqTGkdkz)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:emoji-grin-filled"} {...others} />);
}

export default Component;
