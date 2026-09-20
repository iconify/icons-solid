import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwq1znuml.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zwq1znuml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:crossing-rail-rail"} {...others} />);
}

export default Component;
