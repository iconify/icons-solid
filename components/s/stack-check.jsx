import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im-q8rvxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im-q8rvxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-check"} {...others} />);
}

export default Component;
