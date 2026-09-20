import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn2-zcb5a.css';
import '../../css/h/hx140-n7o.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fn2-zcb5a"/><path class="hx140-n7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yubal"} {...others} />);
}

export default Component;
