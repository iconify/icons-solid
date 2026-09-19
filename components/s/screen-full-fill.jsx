import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sufpb4bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sufpb4bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:screen-full-fill"} {...others} />);
}

export default Component;
