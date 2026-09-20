import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_h8f4u0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_h8f4u0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:face-excited"} {...others} />);
}

export default Component;
