import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kog5zicjb.css';
import '../../css/q/q3ko5nmxb.css';
import '../../css/o/o06rrkwts.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="kog5zicjb"/><path class="q3ko5nmxb"/><path class="o06rrkwts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:commento"} {...others} />);
}

export default Component;
