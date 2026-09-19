import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geq4cpb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="geq4cpb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:bluetooth-signal"} {...others} />);
}

export default Component;
