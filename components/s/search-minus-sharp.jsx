import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npd_bhh0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npd_bhh0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-minus-sharp"} {...others} />);
}

export default Component;
