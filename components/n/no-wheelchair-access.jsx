import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lji5nfbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lji5nfbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:no-wheelchair-access"} {...others} />);
}

export default Component;
