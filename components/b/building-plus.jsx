import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rytk2ybhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rytk2ybhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:building-plus"} {...others} />);
}

export default Component;
