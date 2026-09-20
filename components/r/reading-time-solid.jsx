import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uljtn5aar.css';
import '../../css/a/akh0cg09d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uljtn5aar"/><path clip-rule="evenodd" class="akh0cg09d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:reading-time-solid"} {...others} />);
}

export default Component;
