import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8ux7eavv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t8ux7eavv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-xd-logo-solid"} {...others} />);
}

export default Component;
