import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvhcjuz2f.css';
import '../../css/k/ka_fpy-jt.css';
import '../../css/b/bx0xhcozx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hvhcjuz2f"/><path class="ka_fpy-jt"/><path class="bx0xhcozx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nanoclaw-light"} {...others} />);
}

export default Component;
