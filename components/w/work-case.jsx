import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrq4ddb6o.css';

const viewBox = {"width":512,"height":496};
const content = `<path class="vrq4ddb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:work-case"} {...others} />);
}

export default Component;
