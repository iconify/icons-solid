import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly-8_lh2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ly-8_lh2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:renren-logo-1-block"} {...others} />);
}

export default Component;
