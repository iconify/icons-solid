import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4v-hpbqu.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="l4v-hpbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:quotes"} {...others} />);
}

export default Component;
