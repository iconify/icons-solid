import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asd640ooi.css';

const viewBox = {"width":153,"height":152};
const content = `<path clip-rule="evenodd" class="asd640ooi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tembo-light"} {...others} />);
}

export default Component;
