import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5ktasmpv.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="z5ktasmpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:crackedegg"} {...others} />);
}

export default Component;
