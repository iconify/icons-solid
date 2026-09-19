import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3r70jbnh.css';

const viewBox = {"width":36,"height":24};
const content = `<path class="h3r70jbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:american-express"} {...others} />);
}

export default Component;
