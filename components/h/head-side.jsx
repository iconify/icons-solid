import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6gzs_b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6gzs_b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:head-side"} {...others} />);
}

export default Component;
