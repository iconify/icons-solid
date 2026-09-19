import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wax1c9b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wax1c9b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chevron-duo-down"} {...others} />);
}

export default Component;
