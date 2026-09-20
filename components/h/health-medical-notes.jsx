import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaop-ogzu.css';
import '../../css/w/w8tcc-b1k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gaop-ogzu"/><path class="w8tcc-b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-medical-notes"} {...others} />);
}

export default Component;
