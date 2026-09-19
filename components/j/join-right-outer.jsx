import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmqvwcc6i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bmqvwcc6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:join-right-outer"} {...others} />);
}

export default Component;
