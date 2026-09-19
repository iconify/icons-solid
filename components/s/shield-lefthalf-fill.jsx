import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-4xc8ofo.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="f-4xc8ofo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:shield-lefthalf-fill"} {...others} />);
}

export default Component;
