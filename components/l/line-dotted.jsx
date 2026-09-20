import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp4j1ldlo.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="lp4j1ldlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:line-dotted"} {...others} />);
}

export default Component;
