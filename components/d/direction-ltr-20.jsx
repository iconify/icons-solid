import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0hk93biq.css';
import '../../css/u/ufxw6wkpy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t0hk93biq"/><path class="ufxw6wkpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:direction-ltr-20"} {...others} />);
}

export default Component;
