import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqd6b-bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqd6b-bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:delete-clock"} {...others} />);
}

export default Component;
