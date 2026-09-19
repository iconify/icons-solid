import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd-jgjb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yd-jgjb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:django"} {...others} />);
}

export default Component;
