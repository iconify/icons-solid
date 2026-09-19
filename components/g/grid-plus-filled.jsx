import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u20c2ybqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u20c2ybqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:grid-plus-filled"} {...others} />);
}

export default Component;
