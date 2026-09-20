import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajvn4_1qw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajvn4_1qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:align-vertical-bottom"} {...others} />);
}

export default Component;
