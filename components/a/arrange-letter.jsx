import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwq3slbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwq3slbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrange-letter"} {...others} />);
}

export default Component;
