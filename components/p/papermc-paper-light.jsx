import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0g7ckb0k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0g7ckb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:papermc-paper-light"} {...others} />);
}

export default Component;
