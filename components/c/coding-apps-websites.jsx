import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7-h77blv.css';
import '../../css/s/spvv0ubfq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b7-h77blv"/><path class="spvv0ubfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites"} {...others} />);
}

export default Component;
