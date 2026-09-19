import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1ufupj8t.css';
import '../../css/b/bfqat1bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1ufupj8t"/><path class="bfqat1bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:news"} {...others} />);
}

export default Component;
