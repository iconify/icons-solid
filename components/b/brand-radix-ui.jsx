import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcbq-w_3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcbq-w_3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-radix-ui"} {...others} />);
}

export default Component;
