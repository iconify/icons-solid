import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0bv7wbdk.css';
import '../../css/g/g2_5sshgx.css';
import '../../css/j/j1xfmgbrg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n0bv7wbdk"><path class="g2_5sshgx"/><circle class="j1xfmgbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:dub"} {...others} />);
}

export default Component;
