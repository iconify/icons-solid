import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1h9t678t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1h9t678t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:globe-alt-solid"} {...others} />);
}

export default Component;
