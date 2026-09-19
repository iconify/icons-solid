import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxnha9ckb.css';
import '../../css/p/pf8zfzboe.css';
import '../../css/y/yqb3fgb8u.css';
import '../../css/k/k5ytk7b-i.css';
import '../../css/f/fi6ai_avh.css';
import '../../css/d/dsly88bou.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pxnha9ckb"/><path class="pf8zfzboe"/><path class="yqb3fgb8u"/><path class="k5ytk7b-i"/><path class="fi6ai_avh"/><path class="dsly88bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fedora"} {...others} />);
}

export default Component;
