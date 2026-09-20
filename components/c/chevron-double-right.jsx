import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgru19b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgru19b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:chevron-double-right"} {...others} />);
}

export default Component;
