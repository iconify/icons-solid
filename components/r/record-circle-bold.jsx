import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_csnkffw.css';
import '../../css/k/kvt6enbri.css';
import '../../css/v/v6ngv6bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_csnkffw"/><path class="kvt6enbri"/><path clip-rule="evenodd" class="v6ngv6bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-circle-bold"} {...others} />);
}

export default Component;
