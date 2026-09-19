import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu2_-nbje.css';
import '../../css/e/e6t7vc15w.css';
import '../../css/s/sfus55blb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nu2_-nbje"/><path class="e6t7vc15w"/><path class="sfus55blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-company"} {...others} />);
}

export default Component;
