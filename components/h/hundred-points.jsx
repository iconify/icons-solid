import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t69l_3jve.css';
import '../../css/w/wd-ix_sxa.css';
import '../../css/e/eh35uyflb.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGc4SZ0cCp" class="t69l_3jve"/></defs><use href="#SVGc4SZ0cCp" class="wd-ix_sxa"/><use href="#SVGc4SZ0cCp" class="eh35uyflb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hundred-points"} {...others} />);
}

export default Component;
