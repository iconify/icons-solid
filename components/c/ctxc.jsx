import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5tm16s_g.css';
import '../../css/r/rj75uw35p.css';
import '../../css/h/h5s278hih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5tm16s_g"/><path class="rj75uw35p"/><path class="h5s278hih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ctxc"} {...others} />);
}

export default Component;
