import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf5tgeqen.css';
import '../../css/g/g7lf42b8j.css';
import '../../css/k/kjee7xvdg.css';
import '../../css/j/jqlk-kbvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf5tgeqen"/><path class="g7lf42b8j"/><path class="kjee7xvdg"/><path class="jqlk-kbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-4-bold"} {...others} />);
}

export default Component;
