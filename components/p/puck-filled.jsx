import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1vnqtbdy.css';
import '../../css/j/jdmutcjtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1vnqtbdy"/><path class="jdmutcjtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:puck-filled"} {...others} />);
}

export default Component;
