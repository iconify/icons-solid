import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ceh3bot.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e_ceh3bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:blood-bag-donation-remix"} {...others} />);
}

export default Component;
