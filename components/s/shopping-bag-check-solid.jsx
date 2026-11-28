import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rarc7rbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rarc7rbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shopping-bag-check-solid"} {...others} />);
}

export default Component;
