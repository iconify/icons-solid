import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euga36bjc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="euga36bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:end"} {...others} />);
}

export default Component;
