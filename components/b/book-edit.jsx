import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s91q4ib6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s91q4ib6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-edit"} {...others} />);
}

export default Component;
