import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojt3_9lvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ojt3_9lvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:authy-logo-block"} {...others} />);
}

export default Component;
