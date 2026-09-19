import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5bw_15rv.css';
import '../../css/u/ud4vqp_ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5bw_15rv"/><path class="ud4vqp_ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:text-width-filled"} {...others} />);
}

export default Component;
