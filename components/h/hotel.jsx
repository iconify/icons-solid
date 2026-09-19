import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afvdaibxt.css';
import '../../css/w/wfvxprbyc.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="afvdaibxt"/><path class="wfvxprbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hotel"} {...others} />);
}

export default Component;
