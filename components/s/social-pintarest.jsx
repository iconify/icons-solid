import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lex-7n2gn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lex-7n2gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:social-pintarest"} {...others} />);
}

export default Component;
