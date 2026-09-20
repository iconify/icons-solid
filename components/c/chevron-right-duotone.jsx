import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl3m4qsnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rl3m4qsnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-right-duotone"} {...others} />);
}

export default Component;
