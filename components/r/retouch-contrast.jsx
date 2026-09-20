import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1diztbjw.css';
import '../../css/b/bhl7pu3se.css';
import '../../css/x/xt2z68b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1diztbjw"/><path class="bhl7pu3se"/><path class="xt2z68b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:retouch-contrast"} {...others} />);
}

export default Component;
