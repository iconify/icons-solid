import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj8_-65to.css';
import '../../css/t/tig70s96w.css';
import '../../css/c/cf2gljolc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xj8_-65to"/><path class="tig70s96w"/><path class="cf2gljolc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shelfmark"} {...others} />);
}

export default Component;
