import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b40784e-u.css';
import '../../css/g/g7_--dwga.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b40784e-u"/><path class="g7_--dwga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-expand-2"} {...others} />);
}

export default Component;
