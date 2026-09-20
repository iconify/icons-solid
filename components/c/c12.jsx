import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nac_zjz4x.css';
import '../../css/e/easqq4b6a.css';
import '../../css/r/r6iky7b5v.css';
import '../../css/l/ljttgmb9n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nac_zjz4x"/><path class="easqq4b6a"/><path class="r6iky7b5v"/><path class="ljttgmb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:c12"} {...others} />);
}

export default Component;
