import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/delp4wn8f.css';
import '../../css/n/n273d0b2g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="delp4wn8f"/><path class="n273d0b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-configuration"} {...others} />);
}

export default Component;
