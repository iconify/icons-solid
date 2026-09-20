import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8ierubxq.css';
import '../../css/k/krjlj6ycb.css';
import '../../css/l/l3txyjb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v8ierubxq"/><path class="krjlj6ycb"/><path class="l3txyjb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vuejs"} {...others} />);
}

export default Component;
