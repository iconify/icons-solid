import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0l1hcnqj.css';
import '../../css/j/jmv2g9b4i.css';
import '../../css/j/jqx-1ym2u.css';
import '../../css/d/du_hydbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0l1hcnqj"/><path class="jmv2g9b4i"/><path class="jqx-1ym2u"/><path class="du_hydbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-sale-bold-duotone"} {...others} />);
}

export default Component;
