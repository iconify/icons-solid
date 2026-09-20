import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpqaeib0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpqaeib0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gift-box-1-bold"} {...others} />);
}

export default Component;
