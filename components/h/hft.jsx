import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d10gn0bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d10gn0bhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hft"} {...others} />);
}

export default Component;
