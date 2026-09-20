import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9qm59dbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9qm59dbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-numeric-ascending"} {...others} />);
}

export default Component;
