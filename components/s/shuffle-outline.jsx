import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wba5tcc0y.css';
import '../../css/n/nm-b5odlu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wba5tcc0y"/><path class="nm-b5odlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:shuffle-outline"} {...others} />);
}

export default Component;
