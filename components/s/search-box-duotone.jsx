import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo_dqemwo.css';
import '../../css/r/r-kz3ibtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo_dqemwo"/><path class="r-kz3ibtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-box-duotone"} {...others} />);
}

export default Component;
