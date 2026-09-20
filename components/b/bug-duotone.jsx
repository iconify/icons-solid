import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmmio3p-i.css';
import '../../css/w/w7niv3b6v.css';
import '../../css/c/c76r55w5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zmmio3p-i"/><path class="w7niv3b6v"/><path class="c76r55w5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:bug-duotone"} {...others} />);
}

export default Component;
