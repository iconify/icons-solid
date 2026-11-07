import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1two7b3n.css';
import '../../css/c/cwkqqicwy.css';
import '../../css/r/rgklaf5rc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1two7b3n"/><path class="cwkqqicwy"/><path clip-rule="evenodd" class="rgklaf5rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-quote-bold"} {...others} />);
}

export default Component;
