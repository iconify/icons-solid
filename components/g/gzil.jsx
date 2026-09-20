import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8r1eubvq.css';
import '../../css/c/c4qk6y-3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8r1eubvq"/><path class="c4qk6y-3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gzil"} {...others} />);
}

export default Component;
