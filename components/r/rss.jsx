import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c84me5bzl.css';
import '../../css/d/dty59pw6a.css';
import '../../css/i/i0aiaupcg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c84me5bzl"/><path class="dty59pw6a"/><path class="i0aiaupcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:rss"} {...others} />);
}

export default Component;
