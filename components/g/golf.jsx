import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zshm6db-x.css';
import '../../css/v/v9nm23b6j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zshm6db-x"/><circle class="v9nm23b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:golf"} {...others} />);
}

export default Component;
