import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hicvn82qc.css';

const viewBox = {"width":1792,"height":1824};
const content = `<path class="hicvn82qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:paper-plane-o"} {...others} />);
}

export default Component;
