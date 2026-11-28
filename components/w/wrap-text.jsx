import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaa7_e53b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aaa7_e53b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:wrap-text"} {...others} />);
}

export default Component;
