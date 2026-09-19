import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oznaotbtq.css';
import '../../css/z/z8vf7-egw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oznaotbtq"/><path class="z8vf7-egw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:folder-open-outline"} {...others} />);
}

export default Component;
