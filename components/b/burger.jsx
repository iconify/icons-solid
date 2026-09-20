import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biljftzdn.css';
import '../../css/x/x56wbk0pr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="biljftzdn"/><path clip-rule="evenodd" class="x56wbk0pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger"} {...others} />);
}

export default Component;
