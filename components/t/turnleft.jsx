import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o73s2d9-j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o73s2d9-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:turnleft"} {...others} />);
}

export default Component;
