import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4rcq6bgt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="y4rcq6bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:grave"} {...others} />);
}

export default Component;
