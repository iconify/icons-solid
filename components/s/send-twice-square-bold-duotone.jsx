import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/f/fvqbw8bkl.css';
import '../../css/h/hcarscc_v.css';
import '../../css/l/lo9yp3b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="fvqbw8bkl"/><path class="hcarscc_v"/><path class="lo9yp3b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:send-twice-square-bold-duotone"} {...others} />);
}

export default Component;
