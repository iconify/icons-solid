import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0t_852bq.css';
import '../../css/l/lihbolbto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0t_852bq"/><circle class="lihbolbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:shopping-tag"} {...others} />);
}

export default Component;
