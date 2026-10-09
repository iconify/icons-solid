import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ragezd9rk.css';
import '../../css/k/k4d32yquc.css';
import '../../css/q/qqs5z84kv.css';
import '../../css/s/szn1rdbov.css';
import '../../css/x/x9cdk3d8e.css';
import '../../css/f/f36yu7m0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ragezd9rk"/><path class="k4d32yquc"/><path class="qqs5z84kv"/><path class="szn1rdbov"/><path class="x9cdk3d8e"/><path class="f36yu7m0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bicycle-48-bold"} {...others} />);
}

export default Component;
