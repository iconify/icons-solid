import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gyuogtbyx.css';
import '../../css/r/re1bqhb2q.css';
import '../../css/s/sgoo-oy7b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs3A8LbuO"><g class="aql7dnt-u"><path class="gyuogtbyx"/><circle class="re1bqhb2q"/><path class="sgoo-oy7b"/></g></mask></defs><path mask="url(#SVGs3A8LbuO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:open-an-account"} {...others} />);
}

export default Component;
