import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u--0c0_ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u--0c0_ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bowknot-fill"} {...others} />);
}

export default Component;
