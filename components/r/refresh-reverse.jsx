import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1jznez-y.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2.5};
const content = `<path class="v1jznez-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:refresh-reverse"} {...others} />);
}

export default Component;
