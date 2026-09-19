import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyd8d0txh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyd8d0txh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pool-disolved"} {...others} />);
}

export default Component;
