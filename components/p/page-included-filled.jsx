import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgv6h9b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgv6h9b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:page-included-filled"} {...others} />);
}

export default Component;
