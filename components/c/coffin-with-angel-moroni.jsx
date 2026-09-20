import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_87cvbxx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l_87cvbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffin-with-angel-moroni"} {...others} />);
}

export default Component;
