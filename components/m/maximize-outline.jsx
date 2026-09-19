import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doex5ofaj.css';
import '../../css/u/u9i5pqlkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doex5ofaj"/><path class="u9i5pqlkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:maximize-outline"} {...others} />);
}

export default Component;
