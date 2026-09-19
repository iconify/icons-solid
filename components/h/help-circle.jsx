import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/q/q_jlp8buk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="q_jlp8buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:help-circle"} {...others} />);
}

export default Component;
