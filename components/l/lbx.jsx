import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez0v5nbco.css';
import '../../css/f/fnvhz6b_d.css';
import '../../css/r/r20ki5l4i.css';
import '../../css/w/w4w5jo-zd.css';
import '../../css/h/h3ackybvf.css';
import '../../css/c/cet2asbpe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ez0v5nbco"/><path class="fnvhz6b_d"/><path class="r20ki5l4i"/><path class="w4w5jo-zd"/><path class="h3ackybvf"/><path class="cet2asbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:lbx"} {...others} />);
}

export default Component;
