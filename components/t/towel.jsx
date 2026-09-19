import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/f/fzjkvfbqm.css';
import '../../css/l/lwcbfpoys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoFPYbb5n"><g class="wqznn1ydc"><path class="fzjkvfbqm"/><path class="lwcbfpoys"/></g></mask></defs><path mask="url(#SVGoFPYbb5n)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:towel"} {...others} />);
}

export default Component;
