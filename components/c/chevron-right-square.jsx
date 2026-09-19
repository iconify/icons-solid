import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdzi00bpt.css';
import '../../css/g/g39-95b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdzi00bpt"/><path class="g39-95b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chevron-right-square"} {...others} />);
}

export default Component;
