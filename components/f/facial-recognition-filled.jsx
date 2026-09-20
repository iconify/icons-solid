import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxukx6b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uxukx6b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:facial-recognition-filled"} {...others} />);
}

export default Component;
