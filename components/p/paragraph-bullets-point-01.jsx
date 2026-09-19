import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkey5szpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkey5szpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paragraph-bullets-point-01"} {...others} />);
}

export default Component;
