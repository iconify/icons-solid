import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th5wqpzfa.css';
import '../../css/a/ac63k3-ur.css';
import '../../css/h/h5cwullwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="ac63k3-ur"/><path class="h5cwullwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop-check-solid"} {...others} />);
}

export default Component;
