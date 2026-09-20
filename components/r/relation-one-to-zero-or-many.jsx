import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmi63dt4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dmi63dt4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-one-to-zero-or-many"} {...others} />);
}

export default Component;
