import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7kb0dbiu.css';
import '../../css/o/o5jloubyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7kb0dbiu"/><path class="o5jloubyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-safety-filled"} {...others} />);
}

export default Component;
