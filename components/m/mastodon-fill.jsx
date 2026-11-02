import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk3jx7dit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bk3jx7dit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mastodon-fill"} {...others} />);
}

export default Component;
