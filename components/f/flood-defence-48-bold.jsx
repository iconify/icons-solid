import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctxfvynty.css';
import '../../css/o/oyow42bcu.css';
import '../../css/q/q4qbprqxh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ctxfvynty"/><path class="oyow42bcu"/><path class="q4qbprqxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flood-defence-48-bold"} {...others} />);
}

export default Component;
