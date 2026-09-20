import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udl_y2bcu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="udl_y2bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-boarding-ferryboat"} {...others} />);
}

export default Component;
