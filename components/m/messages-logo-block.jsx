import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvabnibth.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yvabnibth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:messages-logo-block"} {...others} />);
}

export default Component;
