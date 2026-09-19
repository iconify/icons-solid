import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fijs2gb7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fijs2gb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:pentagon-top-left"} {...others} />);
}

export default Component;
