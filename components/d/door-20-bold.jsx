import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6120wbdh.css';
import '../../css/b/bdrmmtuqu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v6120wbdh"/><path class="bdrmmtuqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:door-20-bold"} {...others} />);
}

export default Component;
