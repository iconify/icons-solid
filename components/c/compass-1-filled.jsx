import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgcif9d1i.css';
import '../../css/j/jpcgvbsnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgcif9d1i"/><path class="jpcgvbsnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:compass-1-filled"} {...others} />);
}

export default Component;
