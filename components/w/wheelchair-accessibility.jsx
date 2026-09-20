import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0ak4m-da.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0ak4m-da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wheelchair-accessibility"} {...others} />);
}

export default Component;
