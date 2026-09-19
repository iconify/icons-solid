import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b02t79b0o.css';
import '../../css/k/k5cm0iauv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b02t79b0o"/><path class="k5cm0iauv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:couch-filled"} {...others} />);
}

export default Component;
