import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c58st574x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c58st574x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:size-extra-extra-large"} {...others} />);
}

export default Component;
