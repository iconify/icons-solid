import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd0oqeb7g.css';
import '../../css/u/uvsy0xydv.css';
import '../../css/u/uq2nvxbgs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bd0oqeb7g"/><path class="uvsy0xydv"/><path class="uq2nvxbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:arrow-annotation"} {...others} />);
}

export default Component;
