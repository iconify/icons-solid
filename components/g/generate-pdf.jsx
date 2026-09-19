import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvhy-ba_m.css';
import '../../css/n/n7pqid28s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hvhy-ba_m"/><path class="n7pqid28s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:generate-pdf"} {...others} />);
}

export default Component;
