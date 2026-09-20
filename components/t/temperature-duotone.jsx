import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaqdor5_y.css';
import '../../css/i/i9270-aoh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iaqdor5_y"/><path class="i9270-aoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:temperature-duotone"} {...others} />);
}

export default Component;
