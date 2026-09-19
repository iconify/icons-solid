import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjokqrbgh.css';
import '../../css/s/swl_b_b0a.css';
import '../../css/i/i39yq9nqy.css';
import '../../css/n/ngl64r_9r.css';
import '../../css/k/krbgelbdd.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="zjokqrbgh"/><path clip-rule="evenodd" class="swl_b_b0a"/><path clip-rule="evenodd" class="i39yq9nqy"/><path clip-rule="evenodd" class="ngl64r_9r"/><circle clip-rule="evenodd" class="krbgelbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:imac"} {...others} />);
}

export default Component;
