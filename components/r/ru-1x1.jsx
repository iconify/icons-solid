import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onyqr8g1f.css';
import '../../css/f/f80vq2bep.css';
import '../../css/i/iiw_n9bdd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onyqr8g1f"/><path class="f80vq2bep"/><path class="iiw_n9bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ru-1x1"} {...others} />);
}

export default Component;
