import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da9mj-b_s.css';
import '../../css/n/neukm1fuz.css';
import '../../css/b/bhbvqjyxk.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="da9mj-b_s"/><rect class="neukm1fuz"/><rect class="bhbvqjyxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-row-bottom-filled"} {...others} />);
}

export default Component;
