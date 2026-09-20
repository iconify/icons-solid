import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq3n7ab0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qq3n7ab0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:hackernoon-purcat"} {...others} />);
}

export default Component;
