import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv8p7w18w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv8p7w18w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-right-long-solid"} {...others} />);
}

export default Component;
