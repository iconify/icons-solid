import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wduwcxs0o.css';
import '../../css/s/srcmp7bbo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wduwcxs0o"/><path class="srcmp7bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:make-group"} {...others} />);
}

export default Component;
