import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arebbvaap.css';

const viewBox = {"width":1792,"height":1408};
const content = `<g transform="translate(1792 0) scale(-1 1)"><path class="arebbvaap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:align-right"} {...others} />);
}

export default Component;
