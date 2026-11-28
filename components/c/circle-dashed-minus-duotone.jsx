import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwlomdbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwlomdbcu primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-dashed-minus-duotone"} {...others} />);
}

export default Component;
