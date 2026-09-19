import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di8t26b8w.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="di8t26b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thermometer-three-quarters"} {...others} />);
}

export default Component;
