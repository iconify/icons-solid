import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f25raz9at.css';
import '../../css/h/h67twkbcr.css';

const viewBox = {"width":25,"height":25};
const content = `<path clip-rule="evenodd" class="f25raz9at"/><path class="h67twkbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:share-1-circle"} {...others} />);
}

export default Component;
