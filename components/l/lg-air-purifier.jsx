import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eft6sfbff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eft6sfbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lg-air-purifier"} {...others} />);
}

export default Component;
