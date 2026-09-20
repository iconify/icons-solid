import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2hvsnj5w.css';
import '../../css/k/k55q6hbth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2hvsnj5w"/><path class="k55q6hbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:stamps-image-bold"} {...others} />);
}

export default Component;
