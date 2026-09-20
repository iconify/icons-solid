import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzby4kz3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzby4kz3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:dropbox"} {...others} />);
}

export default Component;
