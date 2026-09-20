import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx0vdxm-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lx0vdxm-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-tika-binary-dark"} {...others} />);
}

export default Component;
