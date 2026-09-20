import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1c38rxqq.css';
import '../../css/n/nl-q95bit.css';
import '../../css/p/p9hlq3xpn.css';
import '../../css/a/atujfizel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1c38rxqq"/><circle class="nl-q95bit"/><circle class="p9hlq3xpn"/><circle class="atujfizel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:list-ui-alt"} {...others} />);
}

export default Component;
