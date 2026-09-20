import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrc4pogtw.css';
import '../../css/y/yof-aacxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrc4pogtw"/><path class="yof-aacxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:wifi"} {...others} />);
}

export default Component;
