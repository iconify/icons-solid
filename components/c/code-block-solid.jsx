import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfe_wvkpo.css';
import '../../css/t/t3678pb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfe_wvkpo"/><path class="t3678pb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:code-block-solid"} {...others} />);
}

export default Component;
