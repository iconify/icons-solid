import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-cdc3b_b.css';

const viewBox = {"width":895,"height":1024};
const content = `<path class="o-cdc3b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:psdown"} {...others} />);
}

export default Component;
