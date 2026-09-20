import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0bpyjbnm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v0bpyjbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:color-picker-remix"} {...others} />);
}

export default Component;
