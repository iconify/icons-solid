import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns35eabmg.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="ns35eabmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:commenting-o"} {...others} />);
}

export default Component;
