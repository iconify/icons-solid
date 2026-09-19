import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_f7byxch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_f7byxch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:small-long-down"} {...others} />);
}

export default Component;
