import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x18_efbzj.css';
import '../../css/a/aekx4xgvo.css';
import '../../css/w/wbjon1bki.css';
import '../../css/f/f_zhl5bzc.css';
import '../../css/z/z7zfk7b5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x18_efbzj"/><path class="aekx4xgvo"/><path class="wbjon1bki"/><path class="f_zhl5bzc"/><path class="z7zfk7b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:greenapple"} {...others} />);
}

export default Component;
