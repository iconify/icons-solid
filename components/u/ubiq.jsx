import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca9dfeugk.css';
import '../../css/r/rg1a49h5j.css';
import '../../css/s/scvi-omos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ca9dfeugk"/><path class="rg1a49h5j"/><path class="scvi-omos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ubiq"} {...others} />);
}

export default Component;
