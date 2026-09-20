import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8cxxfwzf.css';
import '../../css/c/cqn9vuf8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8cxxfwzf"/><path class="cqn9vuf8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:codegeex"} {...others} />);
}

export default Component;
