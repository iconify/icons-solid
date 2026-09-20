import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym2f5wksi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ym2f5wksi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:alfa1"} {...others} />);
}

export default Component;
