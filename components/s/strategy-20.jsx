import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj6ml7n0t.css';
import '../../css/u/ufkna9bqo.css';
import '../../css/j/jj0jprbfg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kj6ml7n0t"/><path class="ufkna9bqo"/><path class="jj0jprbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:strategy-20"} {...others} />);
}

export default Component;
