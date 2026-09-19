import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9d687bfw.css';
import '../../css/z/zrxq4hpuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x9d687bfw"/><path clip-rule="evenodd" class="zrxq4hpuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:visibility-on-outline"} {...others} />);
}

export default Component;
