import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o577v7d3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o577v7d3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:emirati-dirham"} {...others} />);
}

export default Component;
