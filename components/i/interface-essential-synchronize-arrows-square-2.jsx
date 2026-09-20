import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmtza9bsb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qmtza9bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-synchronize-arrows-square-2"} {...others} />);
}

export default Component;
