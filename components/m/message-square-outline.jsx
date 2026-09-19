import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7gfsbb7m.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/s/spxynnb0e.css';
import '../../css/p/p20qyyjsb.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="c7gfsbb7m"/><circle class="f-ksdqydc"/><circle class="spxynnb0e"/><path class="p20qyyjsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:message-square-outline"} {...others} />);
}

export default Component;
