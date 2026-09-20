import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyj7c0ewx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyj7c0ewx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-right"} {...others} />);
}

export default Component;
