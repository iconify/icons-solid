import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et-0ovb7d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="et-0ovb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:bbq-15"} {...others} />);
}

export default Component;
