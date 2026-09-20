import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiabbsb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uiabbsb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-one-or-many-to-one-or-many"} {...others} />);
}

export default Component;
