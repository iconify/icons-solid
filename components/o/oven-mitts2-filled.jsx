import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqp1_dbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nqp1_dbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:oven-mitts2-filled"} {...others} />);
}

export default Component;
