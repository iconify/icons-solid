import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fae7j8bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fae7j8bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:clipboard-check-line"} {...others} />);
}

export default Component;
