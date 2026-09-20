import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnhjn-b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dnhjn-b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:renren-logo-3-block"} {...others} />);
}

export default Component;
