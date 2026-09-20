import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br1-2ibkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="br1-2ibkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chevron-up-double-s"} {...others} />);
}

export default Component;
