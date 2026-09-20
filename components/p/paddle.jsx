import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/att-2cbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="att-2cbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:paddle"} {...others} />);
}

export default Component;
