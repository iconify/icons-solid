import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2yvtsgsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2yvtsgsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:compass-tool"} {...others} />);
}

export default Component;
