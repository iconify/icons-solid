import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzno4qqhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzno4qqhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:open-containers-initiative"} {...others} />);
}

export default Component;
