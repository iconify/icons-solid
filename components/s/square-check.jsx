import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytv8j6l6t.css';
import '../../css/b/bqhst35fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytv8j6l6t"/><path class="bqhst35fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-check"} {...others} />);
}

export default Component;
