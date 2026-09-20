import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-9-h2b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-9-h2b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:empty-slot-24"} {...others} />);
}

export default Component;
