import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz4mkebaq.css';
import '../../css/y/ylzf4_8rg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lz4mkebaq"/><path class="ylzf4_8rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:giphy"} {...others} />);
}

export default Component;
