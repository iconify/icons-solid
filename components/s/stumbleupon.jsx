import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3_4cdcfn.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="a3_4cdcfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:stumbleupon"} {...others} />);
}

export default Component;
