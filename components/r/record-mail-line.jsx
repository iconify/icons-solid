import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g60q9ts9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g60q9ts9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:record-mail-line"} {...others} />);
}

export default Component;
