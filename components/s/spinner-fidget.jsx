import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rynbiubyg.css';
import '../../css/d/dojgfibbu.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="rynbiubyg"/><path class="dojgfibbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:spinner-fidget"} {...others} />);
}

export default Component;
