import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmn7ynbep.css';
import '../../css/y/yohhqnr3k.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="bmn7ynbep"/><path class="yohhqnr3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fish"} {...others} />);
}

export default Component;
