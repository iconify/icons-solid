import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umdp1wo1l.css';
import '../../css/x/x1f6fx_5j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="umdp1wo1l"/><path class="x1f6fx_5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:weather-rainbow"} {...others} />);
}

export default Component;
