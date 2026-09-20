import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlkpbe_sc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mlkpbe_sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:jack-o-lantern"} {...others} />);
}

export default Component;
