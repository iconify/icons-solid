import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qznusex7k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qznusex7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-right-circle-2-solid"} {...others} />);
}

export default Component;
