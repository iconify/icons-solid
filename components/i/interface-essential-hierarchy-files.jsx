import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzi3s0umo.css';
import '../../css/k/kz83e19cw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rzi3s0umo"/><path class="kz83e19cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hierarchy-files"} {...others} />);
}

export default Component;
