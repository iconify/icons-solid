import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r64kgzu8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r64kgzu8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-bottom-open-line"} {...others} />);
}

export default Component;
