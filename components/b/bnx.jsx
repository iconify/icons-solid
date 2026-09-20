import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrsmjybvs.css';
import '../../css/t/tc0ligbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrsmjybvs"/><path class="tc0ligbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bnx"} {...others} />);
}

export default Component;
