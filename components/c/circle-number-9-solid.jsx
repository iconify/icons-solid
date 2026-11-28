import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6ilb7ewq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6ilb7ewq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-number-9-solid"} {...others} />);
}

export default Component;
