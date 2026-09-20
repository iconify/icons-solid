import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt4wtjaxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xt4wtjaxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-left-large-duotone"} {...others} />);
}

export default Component;
