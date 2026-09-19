import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udq__mk0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="udq__mk0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:view-comfortable"} {...others} />);
}

export default Component;
