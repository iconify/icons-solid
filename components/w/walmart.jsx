import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsfh0fb9d.css';

const viewBox = {"width":200.82,"height":36.44};
const content = `<path class="gsfh0fb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:walmart"} {...others} />);
}

export default Component;
