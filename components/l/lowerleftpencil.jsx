import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slmaarbqj.css';
import '../../css/f/f9a6e-urt.css';
import '../../css/z/zopstib4z.css';
import '../../css/i/ilkt83bie.css';
import '../../css/z/z83bc-vox.css';
import '../../css/o/o3pzgdq8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="slmaarbqj"/><path class="f9a6e-urt"/><path class="zopstib4z"/><path class="ilkt83bie"/><path class="z83bc-vox"/><path class="o3pzgdq8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerleftpencil"} {...others} />);
}

export default Component;
