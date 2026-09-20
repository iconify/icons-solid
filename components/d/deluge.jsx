import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5m15vbeq.css';
import '../../css/z/z16bp5rql.css';
import '../../css/s/smgw8kb-o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j5m15vbeq"/><path class="z16bp5rql"/><path class="smgw8kb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:deluge"} {...others} />);
}

export default Component;
