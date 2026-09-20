import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6wkj5prr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6wkj5prr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-square-up-filled"} {...others} />);
}

export default Component;
