import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e49gq2bot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e49gq2bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:book-open-filled"} {...others} />);
}

export default Component;
