import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6vo45b0z.css';
import '../../css/z/z5rc_zbev.css';
import '../../css/g/glg2zcb3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b6vo45b0z"/><path class="z5rc_zbev"/><path class="glg2zcb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:slashdot"} {...others} />);
}

export default Component;
