import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6pjbfwhk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6pjbfwhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:teahouse-filled"} {...others} />);
}

export default Component;
