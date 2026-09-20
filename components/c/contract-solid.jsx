import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv0ihtbqe.css';
import '../../css/p/p06tfrbog.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gv0ihtbqe"/><path clip-rule="evenodd" class="p06tfrbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:contract-solid"} {...others} />);
}

export default Component;
