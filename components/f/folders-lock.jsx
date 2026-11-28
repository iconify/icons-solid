import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9x1_l0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv9x1_l0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:folders-lock"} {...others} />);
}

export default Component;
