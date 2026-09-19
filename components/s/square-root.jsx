import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caqrw6b9h.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="caqrw6b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:square-root"} {...others} />);
}

export default Component;
