import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/k/k5s-t1b0l.css';
import '../../css/a/augjxln2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="k5s-t1b0l"/><path class="augjxln2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:programming-bold-duotone"} {...others} />);
}

export default Component;
