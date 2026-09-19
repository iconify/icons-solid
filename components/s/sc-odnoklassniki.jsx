import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vikf1-blz.css';
import '../../css/n/nt60jabuq.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="vikf1-blz"/><path class="nt60jabuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:sc-odnoklassniki"} {...others} />);
}

export default Component;
