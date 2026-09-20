import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6azs0btd.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<path class="g6azs0btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:arrows-v"} {...others} />);
}

export default Component;
