import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlcn_2b3l.css';
import '../../css/f/f7l70zbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dlcn_2b3l"/><path class="f7l70zbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pipe-fill"} {...others} />);
}

export default Component;
