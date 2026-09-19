import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l22617b1g.css';
import '../../css/o/obtf6y2yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l22617b1g"/><path class="obtf6y2yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:book-open-outline"} {...others} />);
}

export default Component;
