import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1-cgfbkl.css';
import '../../css/z/zw87xgbff.css';
import '../../css/a/ar3grmbxb.css';
import '../../css/l/lf79v8lgu.css';
import '../../css/s/svzibsbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1-cgfbkl"/><path class="zw87xgbff"/><path class="ar3grmbxb"/><path clip-rule="evenodd" class="lf79v8lgu"/><path class="svzibsbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-bold"} {...others} />);
}

export default Component;
