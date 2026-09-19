import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvtd7nshs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvtd7nshs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:battery-good"} {...others} />);
}

export default Component;
