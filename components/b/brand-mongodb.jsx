import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfyo9m4in.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfyo9m4in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-mongodb"} {...others} />);
}

export default Component;
