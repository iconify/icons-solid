import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmh-avb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmh-avb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:minus-circle-off-outline"} {...others} />);
}

export default Component;
