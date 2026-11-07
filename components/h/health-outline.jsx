import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6vco797o.css';
import '../../css/l/lkfeoqf6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6vco797o"/><path clip-rule="evenodd" class="lkfeoqf6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:health-outline"} {...others} />);
}

export default Component;
