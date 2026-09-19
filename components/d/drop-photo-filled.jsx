import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqj6aujyf.css';
import '../../css/n/n0guy7nbp.css';
import '../../css/b/b-7bc9b_n.css';
import '../../css/l/l1xsbgjra.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="sqj6aujyf"/><path class="n0guy7nbp"/><path class="b-7bc9b_n"/><path class="l1xsbgjra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:drop-photo-filled"} {...others} />);
}

export default Component;
