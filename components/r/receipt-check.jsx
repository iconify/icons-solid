import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja0-wk5fu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ja0-wk5fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:receipt-check"} {...others} />);
}

export default Component;
