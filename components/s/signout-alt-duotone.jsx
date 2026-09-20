import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sim9l-hfg.css';
import '../../css/e/emjhpkb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sim9l-hfg"/><path class="emjhpkb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signout-alt-duotone"} {...others} />);
}

export default Component;
