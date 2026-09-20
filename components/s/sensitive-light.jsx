import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pplbo7oar.css';
import '../../css/c/c8aj1-b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pplbo7oar"/><path class="c8aj1-b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sensitive-light"} {...others} />);
}

export default Component;
