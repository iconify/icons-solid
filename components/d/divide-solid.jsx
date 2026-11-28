import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9k_4b-vj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b9k_4b-vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:divide-solid"} {...others} />);
}

export default Component;
