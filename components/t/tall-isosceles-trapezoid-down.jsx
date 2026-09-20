import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnd8sqbbd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tnd8sqbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tall-isosceles-trapezoid-down"} {...others} />);
}

export default Component;
