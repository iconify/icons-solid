import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw3tdynoj.css';
import '../../css/u/uje-1qbyt.css';
import '../../css/q/qkykpdjce.css';
import '../../css/n/n4ywx6bos.css';
import '../../css/h/h6xjpfgeg.css';
import '../../css/u/u5lccr0ji.css';
import '../../css/e/el_jq8buh.css';
import '../../css/k/k2u35ac0v.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="iw3tdynoj"/><path clip-rule="evenodd" class="uje-1qbyt"/><path clip-rule="evenodd" class="qkykpdjce"/><path clip-rule="evenodd" class="n4ywx6bos"/><path clip-rule="evenodd" class="h6xjpfgeg"/><path clip-rule="evenodd" class="u5lccr0ji"/><path clip-rule="evenodd" class="el_jq8buh"/><path clip-rule="evenodd" class="k2u35ac0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:clipboard"} {...others} />);
}

export default Component;
