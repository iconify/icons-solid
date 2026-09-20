import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-pkdf3ku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-pkdf3ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:percent-box"} {...others} />);
}

export default Component;
