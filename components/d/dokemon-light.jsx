import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h23lf5ovw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h23lf5ovw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dokemon-light"} {...others} />);
}

export default Component;
