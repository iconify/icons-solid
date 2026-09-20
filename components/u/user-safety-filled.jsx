import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt0j3ybxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt0j3ybxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-safety-filled"} {...others} />);
}

export default Component;
