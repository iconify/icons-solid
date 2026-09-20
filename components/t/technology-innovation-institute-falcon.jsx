import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjcnumbvg.css';
import '../../css/h/h5tf6mlqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjcnumbvg"/><path class="h5tf6mlqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:technology-innovation-institute-falcon"} {...others} />);
}

export default Component;
