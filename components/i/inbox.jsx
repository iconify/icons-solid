import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay2ifz99p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ay2ifz99p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:inbox"} {...others} />);
}

export default Component;
