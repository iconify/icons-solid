import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5ejrebmz.css';
import '../../css/b/b1k5j-d7u.css';
import '../../css/e/e12tw0b8p.css';
import '../../css/q/qrrh5951r.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b5ejrebmz"/><path class="b1k5j-d7u"/><path class="e12tw0b8p"/><path class="qrrh5951r"/><path class="uymgdabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:vulcan-salute-2"} {...others} />);
}

export default Component;
