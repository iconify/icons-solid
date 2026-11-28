import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvqcnxhdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvqcnxhdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:keyboard-off"} {...others} />);
}

export default Component;
