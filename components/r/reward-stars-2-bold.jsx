import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4sznb5jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4sznb5jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reward-stars-2-bold"} {...others} />);
}

export default Component;
