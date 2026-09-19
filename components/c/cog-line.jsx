import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c64wkyboh.css';
import '../../css/a/az06ycclz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="c64wkyboh clr-i-outline clr-i-outline-path-1"/><path class="az06ycclz clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cog-line"} {...others} />);
}

export default Component;
