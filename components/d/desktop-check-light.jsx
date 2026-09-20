import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th5wqpzfa.css';
import '../../css/v/v419d9bma.css';
import '../../css/e/ekturubtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="v419d9bma"/><path class="ekturubtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop-check-light"} {...others} />);
}

export default Component;
