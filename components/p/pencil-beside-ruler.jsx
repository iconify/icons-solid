import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qekq0fbpq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qekq0fbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pencil-beside-ruler"} {...others} />);
}

export default Component;
