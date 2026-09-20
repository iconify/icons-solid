import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3wi9ouxj.css';
import '../../css/y/ykjnrse8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3wi9ouxj"/><path class="ykjnrse8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codescan-24"} {...others} />);
}

export default Component;
