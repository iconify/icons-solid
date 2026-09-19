import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0c1uhphr.css';
import '../../css/k/kx2q3nbbr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d0c1uhphr"/><path class="kx2q3nbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:link"} {...others} />);
}

export default Component;
