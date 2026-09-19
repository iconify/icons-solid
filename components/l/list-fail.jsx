import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cd0y8fbhg.css';
import '../../css/b/bst2n4bqq.css';
import '../../css/k/ko8634b1x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGd209Vddg"><g class="aql7dnt-u"><path class="cd0y8fbhg"/><circle class="bst2n4bqq"/><circle class="ko8634b1x"/></g></mask></defs><path mask="url(#SVGd209Vddg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:list-fail"} {...others} />);
}

export default Component;
