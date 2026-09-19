import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adhr84b5i.css';
import '../../css/h/htmu1qfhg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="adhr84b5i"/><path class="htmu1qfhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mrs-claus"} {...others} />);
}

export default Component;
