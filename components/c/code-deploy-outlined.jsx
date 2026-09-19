import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohlt3tb5l.css';
import '../../css/n/njpi2rhkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohlt3tb5l"/><path class="njpi2rhkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:code-deploy-outlined"} {...others} />);
}

export default Component;
