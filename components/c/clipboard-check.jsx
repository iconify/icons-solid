import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lul-u6mqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lul-u6mqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:clipboard-check"} {...others} />);
}

export default Component;
