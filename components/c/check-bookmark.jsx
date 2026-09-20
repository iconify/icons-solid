import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzx8w820q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzx8w820q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:check-bookmark"} {...others} />);
}

export default Component;
