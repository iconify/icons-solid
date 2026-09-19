import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6f5--b2i.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="s6f5--b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:snowflake-5"} {...others} />);
}

export default Component;
