import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqgmy6osx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oqgmy6osx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:coin-3-line"} {...others} />);
}

export default Component;
