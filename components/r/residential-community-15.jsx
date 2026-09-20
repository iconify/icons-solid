import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py8_zzozw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="py8_zzozw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:residential-community-15"} {...others} />);
}

export default Component;
