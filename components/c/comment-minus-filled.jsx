import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwso4ubnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kwso4ubnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:comment-minus-filled"} {...others} />);
}

export default Component;
