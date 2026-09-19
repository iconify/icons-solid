import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xk_cgrbsu.css';
import '../../css/q/qkn850bsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG13r5ZdxF"><g class="rohhhzb0l"><circle class="xk_cgrbsu"/><path class="qkn850bsj"/></g></mask></defs><path mask="url(#SVG13r5ZdxF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:unlock-one"} {...others} />);
}

export default Component;
