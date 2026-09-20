import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqoqmd7_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eqoqmd7_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:temperature-minus"} {...others} />);
}

export default Component;
