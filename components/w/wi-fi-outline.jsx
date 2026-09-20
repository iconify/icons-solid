import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2-b-mbou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2-b-mbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:wi-fi-outline"} {...others} />);
}

export default Component;
