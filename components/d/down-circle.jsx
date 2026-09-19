import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4w2kqawh.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="n4w2kqawh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:down-circle"} {...others} />);
}

export default Component;
