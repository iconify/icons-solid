import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3kws5b8f.css';
import '../../css/r/rqm0q0u6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3kws5b8f"/><path class="rqm0q0u6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dam-7-filled"} {...others} />);
}

export default Component;
