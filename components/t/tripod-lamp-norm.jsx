import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8in9rrwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v8in9rrwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:tripod-lamp-norm"} {...others} />);
}

export default Component;
