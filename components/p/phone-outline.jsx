import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy1nb0bde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy1nb0bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:phone-outline"} {...others} />);
}

export default Component;
