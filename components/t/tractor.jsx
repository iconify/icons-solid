import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hlhuly6ye.css';
import '../../css/d/d752omw5m.css';
import '../../css/n/nmoouyb9r.css';
import '../../css/v/v2yh68gxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hlhuly6ye"/><path class="d752omw5m"/><circle class="nmoouyb9r"/><circle class="v2yh68gxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tractor"} {...others} />);
}

export default Component;
