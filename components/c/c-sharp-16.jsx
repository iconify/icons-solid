import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al4_3sb6f.css';
import '../../css/q/qvr6hvb2x.css';
import '../../css/j/jjxxikh1n.css';
import '../../css/q/qogan0b5j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="al4_3sb6f"/><path class="qvr6hvb2x"/><path class="jjxxikh1n"/><path class="qogan0b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:c-sharp-16"} {...others} />);
}

export default Component;
