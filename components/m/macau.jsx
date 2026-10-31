import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ezobcke.css';
import '../../css/c/chm7fdc5b.css';
import '../../css/v/v66gpt9yj.css';
import '../../css/l/lmbelcc2s.css';
import '../../css/k/k8ofb3baa.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="c7ezobcke"/><path class="chm7fdc5b"/><path class="v66gpt9yj"/><path class="lmbelcc2s"/><path class="k8ofb3baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:macau"} {...others} />);
}

export default Component;
