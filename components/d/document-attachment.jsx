import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq7h70pom.css';
import '../../css/y/y3ymk3bab.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eq7h70pom"/><path class="y3ymk3bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-attachment"} {...others} />);
}

export default Component;
