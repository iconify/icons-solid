import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c29gppbhf.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="c29gppbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:spinner-rotate-forward"} {...others} />);
}

export default Component;
