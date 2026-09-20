import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdg7s_bla.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="tdg7s_bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:format-align-bottom"} {...others} />);
}

export default Component;
