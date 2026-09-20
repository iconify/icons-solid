import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9z5fhblb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9z5fhblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-checked"} {...others} />);
}

export default Component;
