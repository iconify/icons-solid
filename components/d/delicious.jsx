import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhie0q3xy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rhie0q3xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:delicious"} {...others} />);
}

export default Component;
