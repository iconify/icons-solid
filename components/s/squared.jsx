import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzhmvnb_f.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="mzhmvnb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squared"} {...others} />);
}

export default Component;
