import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcjt_w24a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcjt_w24a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-left"} {...others} />);
}

export default Component;
