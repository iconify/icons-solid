import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv26_lbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv26_lbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:layout-down-fill"} {...others} />);
}

export default Component;
