import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7t63ub0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7t63ub0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:product-hunt-line"} {...others} />);
}

export default Component;
