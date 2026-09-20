import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um4ht9bsf.css';
import '../../css/k/kvdfrrbjs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="um4ht9bsf"/><path class="kvdfrrbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cello-16"} {...others} />);
}

export default Component;
