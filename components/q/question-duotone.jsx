import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vla37tbfm.css';
import '../../css/t/t576d3m0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vla37tbfm"/><path class="t576d3m0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:question-duotone"} {...others} />);
}

export default Component;
