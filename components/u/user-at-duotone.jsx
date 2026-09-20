import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz7cbhboy.css';
import '../../css/j/jww6vuirk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz7cbhboy"/><path class="jww6vuirk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-at-duotone"} {...others} />);
}

export default Component;
