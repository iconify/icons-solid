import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0d8u222p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p0d8u222p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:expand-horizontal"} {...others} />);
}

export default Component;
