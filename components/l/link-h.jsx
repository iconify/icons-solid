import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuwgi8b7w.css';
import '../../css/u/u8r_c8bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nuwgi8b7w"/><path class="u8r_c8bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:link-h"} {...others} />);
}

export default Component;
