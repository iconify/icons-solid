import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt0e-l7es.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="lt0e-l7es"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:location-north-line-fill"} {...others} />);
}

export default Component;
