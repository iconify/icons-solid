import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_4bw_bzz.css';
import '../../css/i/i33fspbsl.css';
import '../../css/b/bns-mjpkf.css';
import '../../css/a/a2wenh5wd.css';
import '../../css/j/jrsejkkoh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a_4bw_bzz"/><path class="i33fspbsl"/><path class="bns-mjpkf"/><path class="a2wenh5wd"/><path class="jrsejkkoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snail-20-bold"} {...others} />);
}

export default Component;
