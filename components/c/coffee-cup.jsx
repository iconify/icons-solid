import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv4d2ta5x.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="cv4d2ta5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:coffee-cup"} {...others} />);
}

export default Component;
