import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihli-tb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihli-tb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrowhead-down-expressive"} {...others} />);
}

export default Component;
