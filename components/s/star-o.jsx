import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6lwwjqxa.css';

const viewBox = {"width":1664,"height":1600};
const content = `<path class="o6lwwjqxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:star-o"} {...others} />);
}

export default Component;
