import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8vmp6bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8vmp6bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:arrow-downward-square-line"} {...others} />);
}

export default Component;
