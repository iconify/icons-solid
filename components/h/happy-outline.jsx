import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wemwzxbiv.css';
import '../../css/b/bqauwdvox.css';
import '../../css/c/cu_iqhliu.css';
import '../../css/w/w84vznkgo.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wemwzxbiv"/><path class="bqauwdvox"/><circle class="cu_iqhliu"/><circle class="w84vznkgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:happy-outline"} {...others} />);
}

export default Component;
