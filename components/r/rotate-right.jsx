import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5wag-rzr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x5wag-rzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:rotate-right"} {...others} />);
}

export default Component;
