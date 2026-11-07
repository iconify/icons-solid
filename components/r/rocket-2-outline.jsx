import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf34h9jbx.css';
import '../../css/y/ypo27hbxa.css';
import '../../css/k/kfd5w9qxs.css';
import '../../css/y/yyc8v2bch.css';
import '../../css/w/w3n7fxbuc.css';
import '../../css/r/rmy-f-bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf34h9jbx"/><path class="ypo27hbxa"/><path class="kfd5w9qxs"/><path class="yyc8v2bch"/><path class="w3n7fxbuc"/><path clip-rule="evenodd" class="rmy-f-bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-outline"} {...others} />);
}

export default Component;
