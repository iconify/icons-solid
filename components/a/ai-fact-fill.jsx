import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erpofacwv.css';
import '../../css/h/hj78mwx4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="erpofacwv"/><path clip-rule="evenodd" class="hj78mwx4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-fact-fill"} {...others} />);
}

export default Component;
