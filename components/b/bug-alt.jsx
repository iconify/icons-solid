import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfv_bibjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfv_bibjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bug-alt"} {...others} />);
}

export default Component;
