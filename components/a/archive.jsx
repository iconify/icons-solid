import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aev0f0bxv.css';
import '../../css/b/b-yzc2u7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aev0f0bxv"/><path class="b-yzc2u7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:archive"} {...others} />);
}

export default Component;
