import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy37zibmr.css';
import '../../css/o/o15ae4bpw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sy37zibmr"/><path class="o15ae4bpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:convoy"} {...others} />);
}

export default Component;
