import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea8f0gb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ea8f0gb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:smoothcomp"} {...others} />);
}

export default Component;
