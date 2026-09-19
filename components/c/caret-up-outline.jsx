import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp6nr1bih.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sp6nr1bih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:caret-up-outline"} {...others} />);
}

export default Component;
