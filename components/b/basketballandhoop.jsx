import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8hibqbsu.css';
import '../../css/h/hmbgrpr4i.css';
import '../../css/n/nka5jeb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k8hibqbsu"/><path class="hmbgrpr4i"/><path class="nka5jeb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:basketballandhoop"} {...others} />);
}

export default Component;
