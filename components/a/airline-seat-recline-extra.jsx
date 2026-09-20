import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kega9ac9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kega9ac9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:airline-seat-recline-extra"} {...others} />);
}

export default Component;
