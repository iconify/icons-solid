import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p93r2t4tr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p93r2t4tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:kettle-filled"} {...others} />);
}

export default Component;
