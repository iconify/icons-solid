import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z40llcbyn.css';
import '../../css/g/g2_3tpb8y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z40llcbyn"/><path class="g2_3tpb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-setting-computer"} {...others} />);
}

export default Component;
