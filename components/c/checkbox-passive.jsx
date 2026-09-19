import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy_iv7ssp.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="oy_iv7ssp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:checkbox-passive"} {...others} />);
}

export default Component;
