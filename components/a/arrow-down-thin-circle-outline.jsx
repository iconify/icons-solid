import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z85omn0_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z85omn0_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-down-thin-circle-outline"} {...others} />);
}

export default Component;
