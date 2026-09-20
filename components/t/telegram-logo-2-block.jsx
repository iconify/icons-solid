import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1_nn9ipg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s1_nn9ipg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:telegram-logo-2-block"} {...others} />);
}

export default Component;
