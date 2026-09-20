import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jggrpmhpm.css';
import '../../css/a/avwmicc9i.css';
import '../../css/q/q8zv7fb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jggrpmhpm"/><path class="avwmicc9i"/><path class="q8zv7fb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:302dotai"} {...others} />);
}

export default Component;
