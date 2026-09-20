import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apsd-abio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apsd-abio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-one-or-many-to-one"} {...others} />);
}

export default Component;
