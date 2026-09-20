import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de9w25bjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de9w25bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrange-square2-filled"} {...others} />);
}

export default Component;
