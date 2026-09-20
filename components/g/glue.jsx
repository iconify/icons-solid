import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3qs-bclp.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1.5};
const content = `<path class="g3qs-bclp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:glue"} {...others} />);
}

export default Component;
