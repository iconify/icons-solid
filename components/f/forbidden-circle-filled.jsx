import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he5vvvb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="he5vvvb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forbidden-circle-filled"} {...others} />);
}

export default Component;
