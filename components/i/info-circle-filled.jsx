import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2fis1ivm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2fis1ivm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:info-circle-filled"} {...others} />);
}

export default Component;
