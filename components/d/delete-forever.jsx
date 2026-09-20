import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tebu7d1rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tebu7d1rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:delete-forever"} {...others} />);
}

export default Component;
