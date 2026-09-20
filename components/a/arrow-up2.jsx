import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4g5wbp8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4g5wbp8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-up2"} {...others} />);
}

export default Component;
