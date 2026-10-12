import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l91gf31ht.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l91gf31ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:connector-fill-20"} {...others} />);
}

export default Component;
