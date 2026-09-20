import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofk05cbfv.css';
import '../../css/p/p7hyuf70f.css';
import '../../css/j/j8mjksuyo.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ofk05cbfv"/><path class="p7hyuf70f"/><path class="j8mjksuyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:calculator"} {...others} />);
}

export default Component;
