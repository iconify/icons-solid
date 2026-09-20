import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9aih1b3i.css';
import '../../css/h/hdf9syabk.css';
import '../../css/c/cgzz9rn2k.css';
import '../../css/r/rmz1fob0f.css';
import '../../css/e/e5782b0zo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9aih1b3i"/><path class="hdf9syabk"/><path class="cgzz9rn2k"/><path class="rmz1fob0f"/><path class="e5782b0zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:klay"} {...others} />);
}

export default Component;
