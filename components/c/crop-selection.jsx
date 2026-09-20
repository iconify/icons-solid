import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww-69_hbt.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ww-69_hbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:crop-selection"} {...others} />);
}

export default Component;
