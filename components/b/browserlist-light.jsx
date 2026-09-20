import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh2rg2bpe.css';
import '../../css/i/i9gf5actf.css';
import '../../css/e/e2wi94ygl.css';

const viewBox = {"width":140,"height":140};
const content = `<g transform="translate(10.508 10.205)" class="sh2rg2bpe"><circle class="i9gf5actf"/><path class="e2wi94ygl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:browserlist-light"} {...others} />);
}

export default Component;
