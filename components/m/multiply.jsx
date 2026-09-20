import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji3rfrb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji3rfrb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:multiply"} {...others} />);
}

export default Component;
