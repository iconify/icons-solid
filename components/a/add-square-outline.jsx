import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxj7gxbyl.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxj7gxbyl"/><path clip-rule="evenodd" class="g4e643m4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-square-outline"} {...others} />);
}

export default Component;
