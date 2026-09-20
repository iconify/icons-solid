import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1z1hbc7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n1z1hbc7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:accordion"} {...others} />);
}

export default Component;
