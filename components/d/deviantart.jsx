import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-2ebz4el.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-2ebz4el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:deviantart"} {...others} />);
}

export default Component;
