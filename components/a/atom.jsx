import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1j74k3mk.css';
import '../../css/g/gknbh0bsd.css';

const viewBox = {"width":256,"height":256};
const content = `<circle class="y1j74k3mk"/><path class="gknbh0bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:atom"} {...others} />);
}

export default Component;
