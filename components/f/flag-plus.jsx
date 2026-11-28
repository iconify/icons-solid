import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m59tlb5eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m59tlb5eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:flag-plus"} {...others} />);
}

export default Component;
