import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdco8y64r.css';
import '../../css/t/ttpvcybxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdco8y64r"/><path class="ttpvcybxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:pie-chart-duotone"} {...others} />);
}

export default Component;
