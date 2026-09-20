import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar1skxb1o.css';
import '../../css/q/q35s5pbbu.css';

const viewBox = {"width":375,"height":375};
const content = `<path class="ar1skxb1o"/><path class="q35s5pbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glincker-dark"} {...others} />);
}

export default Component;
