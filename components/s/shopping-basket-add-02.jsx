import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nm63zg0wp.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/d/dgznyouyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nm63zg0wp"/><path class="yjo9i5b3u"/><path class="dgznyouyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-add-02"} {...others} />);
}

export default Component;
