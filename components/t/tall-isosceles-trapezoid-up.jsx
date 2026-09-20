import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-42yhbna.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s-42yhbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tall-isosceles-trapezoid-up"} {...others} />);
}

export default Component;
