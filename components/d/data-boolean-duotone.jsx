import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crs9g4qvt.css';
import '../../css/f/fbk-2ebdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crs9g4qvt"/><path clip-rule="evenodd" class="fbk-2ebdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-boolean-duotone"} {...others} />);
}

export default Component;
