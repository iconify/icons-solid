import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8wenfbcs.css';
import '../../css/o/o4xm8u5yr.css';
import '../../css/a/a9k_5nb9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q8wenfbcs"/><path class="o4xm8u5yr"/><path class="a9k_5nb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-pencil-stroke-20"} {...others} />);
}

export default Component;
