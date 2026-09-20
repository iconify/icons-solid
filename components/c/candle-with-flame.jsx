import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_is-xgyk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b_is-xgyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:candle-with-flame"} {...others} />);
}

export default Component;
