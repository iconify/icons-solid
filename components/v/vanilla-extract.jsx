import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q57lwbc9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q57lwbc9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:vanilla-extract"} {...others} />);
}

export default Component;
