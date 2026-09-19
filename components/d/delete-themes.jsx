import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wbi4c3bnf.css';
import '../../css/c/c-lptrhzz.css';
import '../../css/o/ore9ccbul.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsR0uhmrU"><g class="rohhhzb0l"><path clip-rule="evenodd" class="wbi4c3bnf"/><path class="c-lptrhzz"/><path class="ore9ccbul"/></g></mask></defs><path mask="url(#SVGsR0uhmrU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete-themes"} {...others} />);
}

export default Component;
