import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fep9-3zrt.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="fep9-3zrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:drupal"} {...others} />);
}

export default Component;
