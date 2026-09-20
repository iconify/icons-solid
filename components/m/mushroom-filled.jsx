import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0k6b2b-n.css';
import '../../css/n/ndmpziulf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0k6b2b-n"/><path class="ndmpziulf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mushroom-filled"} {...others} />);
}

export default Component;
