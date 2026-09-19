import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh9t6fjqh.css';
import '../../css/g/g_wd5geuf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh9t6fjqh"/><path clip-rule="evenodd" class="g_wd5geuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:shopping-basket-solid"} {...others} />);
}

export default Component;
