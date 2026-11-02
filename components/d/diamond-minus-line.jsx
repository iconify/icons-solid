import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcn5b1kkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcn5b1kkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:diamond-minus-line"} {...others} />);
}

export default Component;
