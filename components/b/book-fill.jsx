import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl9s-5ban.css';
import '../../css/l/lc9mj6b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl9s-5ban"/><path clip-rule="evenodd" class="lc9mj6b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:book-fill"} {...others} />);
}

export default Component;
