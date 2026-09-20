import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bay1nz_kn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bay1nz_kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:memories-line"} {...others} />);
}

export default Component;
