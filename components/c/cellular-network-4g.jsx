import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqs9g2iea.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nqs9g2iea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cellular-network-4g"} {...others} />);
}

export default Component;
