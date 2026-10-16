import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6-guxbgd.css';
import '../../css/i/i3cnczbuw.css';
import '../../css/i/ilpgmbc3k.css';
import '../../css/l/l0kxv-blq.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.37,"top":-1.63};
const content = `<path class="e6-guxbgd"/><path class="i3cnczbuw"/><path class="ilpgmbc3k"/><path class="l0kxv-blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:open-policy-agent-light"} {...others} />);
}

export default Component;
