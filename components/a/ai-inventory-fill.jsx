import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v463yrbvf.css';
import '../../css/q/qat1j1bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v463yrbvf"/><path clip-rule="evenodd" class="qat1j1bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-inventory-fill"} {...others} />);
}

export default Component;
