import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf3rx2bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hf3rx2bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:git-branch-check"} {...others} />);
}

export default Component;
