import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsg_f3idp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tsg_f3idp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:text-slash-solid"} {...others} />);
}

export default Component;
