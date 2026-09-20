import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zazwy-4qg.css';
import '../../css/i/iwtd4lopd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zazwy-4qg"/><path class="iwtd4lopd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:billing-info-light"} {...others} />);
}

export default Component;
