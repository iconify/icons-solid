import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3lmd4bmk.css';
import '../../css/f/fvmh2ibcr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f3lmd4bmk"/><path class="fvmh2ibcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rule-draft"} {...others} />);
}

export default Component;
