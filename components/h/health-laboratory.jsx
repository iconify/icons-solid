import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veuj-zb1p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="veuj-zb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-laboratory"} {...others} />);
}

export default Component;
