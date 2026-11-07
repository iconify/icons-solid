import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0hskbc8u.css';
import '../../css/a/af2lrdbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0hskbc8u"/><path class="af2lrdbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-3-bold-duotone"} {...others} />);
}

export default Component;
