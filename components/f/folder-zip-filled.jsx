import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/j/jvs9gf.css';
import '../../css/l/l6j71m.css';
import '../../css/y/y4wbml.css';
import '../../css/h/hhvwim.css';
import '../../css/u/u4ckiv.css';
import '../../css/e/eexehd.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew jvs9gf"/><path class="iw1iew l6j71m y4wbml"/><path class="hhvwim iw1iew y4wbml"/><path class="iw1iew u4ckiv y4wbml"/><path class="eexehd iw1iew y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-zip-filled"} {...others} />);
}

export default Component;
