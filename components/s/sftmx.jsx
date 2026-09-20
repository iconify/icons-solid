import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa_s2gbth.css';
import '../../css/a/amj00lbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa_s2gbth"/><path clip-rule="evenodd" class="amj00lbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sftmx"} {...others} />);
}

export default Component;
