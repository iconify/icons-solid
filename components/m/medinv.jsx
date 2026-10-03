import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-0o19e9y.css';
import '../../css/e/e-6h781vx.css';
import '../../css/u/unlskpb2f.css';
import '../../css/j/jwwt8sbua.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-0o19e9y"/><path class="e-6h781vx"/><path class="unlskpb2f"/><circle class="jwwt8sbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medinv"} {...others} />);
}

export default Component;
