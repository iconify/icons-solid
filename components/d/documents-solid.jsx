import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbyxarbrt.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="nbyxarbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:documents-solid"} {...others} />);
}

export default Component;
