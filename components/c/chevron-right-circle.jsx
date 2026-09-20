import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4ajofb5a.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="y4ajofb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:chevron-right-circle"} {...others} />);
}

export default Component;
