import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6rs07cfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6rs07cfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:add-circle-filled"} {...others} />);
}

export default Component;
