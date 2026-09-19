import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmf7520zx.css';
import '../../css/q/q8_kvdbel.css';
import '../../css/w/w-wb9bbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmf7520zx"/><path class="q8_kvdbel"/><path class="w-wb9bbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:certificate-authority-service"} {...others} />);
}

export default Component;
