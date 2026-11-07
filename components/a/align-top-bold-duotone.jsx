import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tri1pdban.css';
import '../../css/r/r5hjnw2io.css';
import '../../css/f/f59hu7jtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tri1pdban"/><path class="r5hjnw2io"/><path clip-rule="evenodd" class="f59hu7jtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-bold-duotone"} {...others} />);
}

export default Component;
