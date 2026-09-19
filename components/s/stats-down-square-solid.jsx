import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jswr-7bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jswr-7bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:stats-down-square-solid"} {...others} />);
}

export default Component;
