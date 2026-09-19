import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow0wjkqcp.css';
import '../../css/a/alyn96y6v.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ow0wjkqcp"/><path class="alyn96y6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:search"} {...others} />);
}

export default Component;
