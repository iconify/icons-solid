import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3twlpavd.css';
import '../../css/e/eztzo_ccz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k3twlpavd"/><path class="eztzo_ccz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:push"} {...others} />);
}

export default Component;
