import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idebgla5y.css';
import '../../css/y/y16o0oyvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idebgla5y"/><path class="y16o0oyvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-filled"} {...others} />);
}

export default Component;
