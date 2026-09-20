import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl8j6cbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sl8j6cbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:list-search"} {...others} />);
}

export default Component;
