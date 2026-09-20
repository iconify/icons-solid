import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8dgv7ect.css';
import '../../css/c/c4hlqdbyg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n8dgv7ect"/><path class="c4hlqdbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:space-16"} {...others} />);
}

export default Component;
