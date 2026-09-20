import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp0-z8bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pp0-z8bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dmtr"} {...others} />);
}

export default Component;
