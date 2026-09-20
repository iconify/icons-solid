import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7bepq5ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7bepq5ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:skip-next-circle"} {...others} />);
}

export default Component;
