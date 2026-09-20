import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilhchq55t.css';
import '../../css/c/cj4vqgbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilhchq55t"/><path class="cj4vqgbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bnb-line"} {...others} />);
}

export default Component;
