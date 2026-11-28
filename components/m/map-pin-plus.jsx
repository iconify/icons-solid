import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuxlfd-qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nuxlfd-qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:map-pin-plus"} {...others} />);
}

export default Component;
