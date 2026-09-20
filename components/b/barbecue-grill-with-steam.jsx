import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdxq43g1p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qdxq43g1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:barbecue-grill-with-steam"} {...others} />);
}

export default Component;
