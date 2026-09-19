import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c18qyszxk.css';
import '../../css/c/cwaoh8bpd.css';
import '../../css/n/nrw-6wbkj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c18qyszxk"/><path class="cwaoh8bpd"/><path class="nrw-6wbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:puppeteer"} {...others} />);
}

export default Component;
