import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qit1y2bjj.css';
import '../../css/m/mlq8elbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qit1y2bjj"/><path class="mlq8elbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dart-board-filled"} {...others} />);
}

export default Component;
