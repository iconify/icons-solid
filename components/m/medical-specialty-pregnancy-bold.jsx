import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_9pn8b4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_9pn8b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-specialty-pregnancy-bold"} {...others} />);
}

export default Component;
