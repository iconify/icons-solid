import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww7cr52rq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ww7cr52rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:fashion-accessories"} {...others} />);
}

export default Component;
