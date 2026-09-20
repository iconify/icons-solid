import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1yytzwi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="py1yytzwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:landing"} {...others} />);
}

export default Component;
