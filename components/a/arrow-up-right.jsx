import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odxtwi4cv.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-6.5};
const content = `<path class="odxtwi4cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:arrow-up-right"} {...others} />);
}

export default Component;
