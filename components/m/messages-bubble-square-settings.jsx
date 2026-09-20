import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6r127bgj.css';
import '../../css/k/k-ritbbgp.css';
import '../../css/l/l_kmzlb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6r127bgj"/><path class="k-ritbbgp"/><path class="l_kmzlb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-bubble-square-settings"} {...others} />);
}

export default Component;
