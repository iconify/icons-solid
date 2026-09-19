import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt7k6rbci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vt7k6rbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:no-luggage-trolleys-beyond-this-point"} {...others} />);
}

export default Component;
