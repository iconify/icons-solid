import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvh7nq3mz.css';
import '../../css/j/j1fv-acqq.css';
import '../../css/w/w300h1bku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvh7nq3mz"/><path class="j1fv-acqq"/><path class="w300h1bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:view-binocular"} {...others} />);
}

export default Component;
