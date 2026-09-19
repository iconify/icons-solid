import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8gd9bcgb.css';
import '../../css/e/ewb21wbfu.css';
import '../../css/b/b8pd5uezq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="a8gd9bcgb"/><circle class="ewb21wbfu"/><path class="b8pd5uezq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:wheelchair"} {...others} />);
}

export default Component;
