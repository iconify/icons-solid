import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crv-b5b4n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="crv-b5b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:resize-vertical"} {...others} />);
}

export default Component;
