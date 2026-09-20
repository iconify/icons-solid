import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cec67vb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cec67vb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-alphabetical-ascending-variant"} {...others} />);
}

export default Component;
