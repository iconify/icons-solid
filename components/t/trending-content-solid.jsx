import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3nua2_ov.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w3nua2_ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:trending-content-solid"} {...others} />);
}

export default Component;
