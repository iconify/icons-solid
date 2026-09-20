import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkn6_o_df.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkn6_o_df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gift-card-line"} {...others} />);
}

export default Component;
