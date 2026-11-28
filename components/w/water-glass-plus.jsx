import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msh8qpjuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msh8qpjuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:water-glass-plus"} {...others} />);
}

export default Component;
