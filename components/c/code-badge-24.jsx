import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx01pybcw.css';
import '../../css/g/go6el9bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx01pybcw"/><path class="go6el9bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:code-badge-24"} {...others} />);
}

export default Component;
