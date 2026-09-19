import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpe_dfizg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qpe_dfizg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-euro-solid"} {...others} />);
}

export default Component;
