import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4qmq9bbm.css';
import '../../css/a/anprkxbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4qmq9bbm"/><path clip-rule="evenodd" class="anprkxbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-photoshop-solid"} {...others} />);
}

export default Component;
