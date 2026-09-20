import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c11ar8byz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c11ar8byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flag-minus-outline"} {...others} />);
}

export default Component;
