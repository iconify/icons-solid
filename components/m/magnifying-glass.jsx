import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg80xcbze.css';
import '../../css/w/wsvpupbfs.css';
import '../../css/j/jwn5amcvm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qg80xcbze"/><path class="wsvpupbfs"/><path class="jwn5amcvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:magnifying-glass"} {...others} />);
}

export default Component;
