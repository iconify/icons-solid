import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5kekj5qc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5kekj5qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:briefcase-alt-2"} {...others} />);
}

export default Component;
