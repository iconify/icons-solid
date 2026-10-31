import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9bvnqb0c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q9bvnqb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-open-gabled-building-with-chimney-and-door"} {...others} />);
}

export default Component;
