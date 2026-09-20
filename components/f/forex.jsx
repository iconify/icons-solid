import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olzavh4ia.css';
import '../../css/w/wqvb8lb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olzavh4ia"/><path clip-rule="evenodd" class="wqvb8lb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:forex"} {...others} />);
}

export default Component;
