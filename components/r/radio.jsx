import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l3jpuvbou.css';
import '../../css/b/b96cb6reh.css';
import '../../css/l/lx-ga5bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="l3jpuvbou"/><path class="b96cb6reh"/><path class="lx-ga5bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radio"} {...others} />);
}

export default Component;
