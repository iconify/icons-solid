import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqy_hqb1s.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="jqy_hqb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:snowboarding"} {...others} />);
}

export default Component;
