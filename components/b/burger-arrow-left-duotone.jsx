import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skiv409wp.css';
import '../../css/v/v5f6axbii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skiv409wp"/><path class="v5f6axbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-arrow-left-duotone"} {...others} />);
}

export default Component;
