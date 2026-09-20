import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9st1u1pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b9st1u1pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:visibility-off"} {...others} />);
}

export default Component;
