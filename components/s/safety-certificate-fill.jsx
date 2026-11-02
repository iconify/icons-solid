import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j23q30xfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j23q30xfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safety-certificate-fill"} {...others} />);
}

export default Component;
