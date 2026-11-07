import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzw6lvbdu.css';
import '../../css/s/s1ws97bqa.css';
import '../../css/j/jtnd67jrf.css';
import '../../css/t/tn0g6-4-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dzw6lvbdu"/><path class="s1ws97bqa"/><path clip-rule="evenodd" class="jtnd67jrf"/><path clip-rule="evenodd" class="tn0g6-4-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-bold"} {...others} />);
}

export default Component;
