import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6k6c5bss.css';
import '../../css/n/n1xy6nh9u.css';
import '../../css/l/litg_1bdj.css';
import '../../css/n/n20flac_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6k6c5bss"/><circle class="n1xy6nh9u"/><rect class="litg_1bdj"/><rect class="n20flac_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:money-duotone"} {...others} />);
}

export default Component;
