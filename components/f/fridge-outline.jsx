import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zit9a7yxo.css';
import '../../css/b/br0wqld1w.css';
import '../../css/h/hqpwl64dn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zit9a7yxo"/><path class="br0wqld1w"/><path clip-rule="evenodd" class="hqpwl64dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-outline"} {...others} />);
}

export default Component;
