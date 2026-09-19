import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt_n3ccpd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lt_n3ccpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:level-up"} {...others} />);
}

export default Component;
