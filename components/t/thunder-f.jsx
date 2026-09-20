import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lps5dbbll.css';

const viewBox = {"width":24,"height":24,"left":-7.5,"top":-3.5};
const content = `<path class="lps5dbbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:thunder-f"} {...others} />);
}

export default Component;
