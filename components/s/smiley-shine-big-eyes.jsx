import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfipvoh5c.css';
import '../../css/p/pmw0v_bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfipvoh5c"/><path class="pmw0v_bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-shine-big-eyes"} {...others} />);
}

export default Component;
