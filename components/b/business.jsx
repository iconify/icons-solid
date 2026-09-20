import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5w07jbzw.css';
import '../../css/f/f30po-b8i.css';
import '../../css/c/c6en_42bj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5w07jbzw"/><path class="f30po-b8i"/><path class="c6en_42bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:business"} {...others} />);
}

export default Component;
