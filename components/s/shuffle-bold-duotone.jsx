import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/s/s41nwo9jh.css';
import '../../css/k/k8ef9sbjl.css';
import '../../css/b/blczsbbja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="s41nwo9jh"/><path class="k8ef9sbjl"/><path class="blczsbbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shuffle-bold-duotone"} {...others} />);
}

export default Component;
