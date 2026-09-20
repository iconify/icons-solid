import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toxbqhbrx.css';
import '../../css/n/nzo8-bcfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="toxbqhbrx"/><path class="nzo8-bcfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:step-forward"} {...others} />);
}

export default Component;
