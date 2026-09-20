import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btjx-og8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btjx-og8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ellipses-horizontal"} {...others} />);
}

export default Component;
