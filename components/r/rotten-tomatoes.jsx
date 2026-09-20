import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0rp2hbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0rp2hbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rotten-tomatoes"} {...others} />);
}

export default Component;
