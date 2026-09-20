import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss1agp6sr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ss1agp6sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-alt-circle-left-solid"} {...others} />);
}

export default Component;
