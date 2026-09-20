import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qim_7oblv.css';
import '../../css/a/as36oyixv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qim_7oblv"/><path class="as36oyixv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cog-light"} {...others} />);
}

export default Component;
