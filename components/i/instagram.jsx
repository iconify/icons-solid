import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp4ju-o8a.css';
import '../../css/i/iplo4jb9z.css';
import '../../css/c/c_jykcbjp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNCk1AeEo"><g class="ft5dv1b6b"><path class="qp4ju-o8a"/><path class="iplo4jb9z"/><path class="c_jykcbjp"/></g></mask></defs><path mask="url(#SVGNCk1AeEo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:instagram"} {...others} />);
}

export default Component;
