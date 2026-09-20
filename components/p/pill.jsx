import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8uyevbiw.css';
import '../../css/e/epz418bnz.css';
import '../../css/a/a0-8whbga.css';
import '../../css/q/qenwbzlps.css';
import '../../css/c/c_6k8nblp.css';
import '../../css/j/jjv2n6bvm.css';
import '../../css/d/d5hi0bc2y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s8uyevbiw"/><path class="epz418bnz"/><path class="a0-8whbga"/><path class="qenwbzlps"/><path class="c_6k8nblp"/><path class="jjv2n6bvm"/><path class="d5hi0bc2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:pill"} {...others} />);
}

export default Component;
