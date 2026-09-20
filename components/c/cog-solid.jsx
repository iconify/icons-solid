import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu7wg9bkj.css';
import '../../css/e/enbl2qcxm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hu7wg9bkj"/><path clip-rule="evenodd" class="enbl2qcxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cog-solid"} {...others} />);
}

export default Component;
