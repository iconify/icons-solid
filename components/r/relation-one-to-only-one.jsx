import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u12zo6b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u12zo6b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-one-to-only-one"} {...others} />);
}

export default Component;
