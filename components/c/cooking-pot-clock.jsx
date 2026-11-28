import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us7y2n5ix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us7y2n5ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:cooking-pot-clock"} {...others} />);
}

export default Component;
