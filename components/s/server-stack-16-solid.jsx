import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p--5p7e8l.css';
import '../../css/g/grq9qjftd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p--5p7e8l"/><path clip-rule="evenodd" class="grq9qjftd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:server-stack-16-solid"} {...others} />);
}

export default Component;
