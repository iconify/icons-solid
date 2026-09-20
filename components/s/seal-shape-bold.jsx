import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li9yf9n-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="li9yf9n-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:seal-shape-bold"} {...others} />);
}

export default Component;
