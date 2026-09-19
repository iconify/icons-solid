import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r08ed1f0f.css';

const viewBox = {"width":289,"height":960};
const content = `<path class="r08ed1f0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:braceright"} {...others} />);
}

export default Component;
