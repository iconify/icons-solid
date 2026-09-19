import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2abq7bcp.css';
import '../../css/i/i10p98n8s.css';
import '../../css/x/xp0k47luu.css';
import '../../css/o/o2lq3ybcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s2abq7bcp"/><g class="i10p98n8s"><path class="xp0k47luu"/><circle class="o2lq3ybcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:library"} {...others} />);
}

export default Component;
