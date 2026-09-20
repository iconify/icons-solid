import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv1tcd4jc.css';
import '../../css/c/crp5ew-_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cv1tcd4jc"/><path class="crp5ew-_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skiing-snow-scooter-person-bold"} {...others} />);
}

export default Component;
