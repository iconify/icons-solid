import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0z8i7m6l.css';
import '../../css/t/tr2lgt9jh.css';
import '../../css/y/y8s2o56ld.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="o0z8i7m6l"/><path class="tr2lgt9jh"/><path class="y8s2o56ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:astro-wordmark"} {...others} />);
}

export default Component;
