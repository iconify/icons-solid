import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2cww2bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2cww2bbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:html3-alt"} {...others} />);
}

export default Component;
