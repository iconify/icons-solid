import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu5mrjb6u.css';
import '../../css/p/prbk2rl9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu5mrjb6u"/><path clip-rule="evenodd" class="prbk2rl9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-alpha-desc-24"} {...others} />);
}

export default Component;
