import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbz6_zhjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbz6_zhjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-up-z-a"} {...others} />);
}

export default Component;
