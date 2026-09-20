import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxqrm3b9o.css';

const viewBox = {"width":101,"height":22};
const content = `<path class="hxqrm3b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:caldotcom-light"} {...others} />);
}

export default Component;
