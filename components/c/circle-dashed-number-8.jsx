import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpcu_5bjw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpcu_5bjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-dashed-number-8"} {...others} />);
}

export default Component;
