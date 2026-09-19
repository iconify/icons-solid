import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcin9tbkw.css';

const viewBox = {"width":2304,"height":1280};
const content = `<path class="vcin9tbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:battery-4"} {...others} />);
}

export default Component;
