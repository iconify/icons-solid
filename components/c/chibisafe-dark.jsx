import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnm87zbsi.css';
import '../../css/j/jpb4tzbtj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fnm87zbsi"/><path class="jpb4tzbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chibisafe-dark"} {...others} />);
}

export default Component;
