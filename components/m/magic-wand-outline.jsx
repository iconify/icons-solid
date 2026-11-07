import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az85j8l9o.css';
import '../../css/c/cnhx37y6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="az85j8l9o"/><path class="cnhx37y6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-outline"} {...others} />);
}

export default Component;
