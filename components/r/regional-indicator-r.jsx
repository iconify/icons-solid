import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc85k4qnp.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/u/uwr815gzx.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="uc85k4qnp"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="uwr815gzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-r"} {...others} />);
}

export default Component;
