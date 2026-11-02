import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpj1v4jjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpj1v4jjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:foot-line"} {...others} />);
}

export default Component;
