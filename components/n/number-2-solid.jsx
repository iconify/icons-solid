import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da1bw8ugd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="da1bw8ugd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-2-solid"} {...others} />);
}

export default Component;
