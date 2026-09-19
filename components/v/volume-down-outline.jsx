import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlo02_iiq.css';
import '../../css/q/qw5e84bjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vlo02_iiq"/><path class="qw5e84bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:volume-down-outline"} {...others} />);
}

export default Component;
