import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzn1pt78g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzn1pt78g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:th-large-outline"} {...others} />);
}

export default Component;
