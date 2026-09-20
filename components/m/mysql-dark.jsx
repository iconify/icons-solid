import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk3xrrbnq.css';
import '../../css/c/cjo_bouin.css';

const viewBox = {"width":256,"height":252};
const content = `<path class="hk3xrrbnq"/><path class="cjo_bouin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mysql-dark"} {...others} />);
}

export default Component;
