import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p97i2jbqj.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="p97i2jbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:helmet-safety-1"} {...others} />);
}

export default Component;
