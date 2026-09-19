import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1xy6nh9u.css';
import '../../css/t/toljrtdpg.css';
import '../../css/r/rpxe9ibnu.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n1xy6nh9u"/><circle class="toljrtdpg"/><circle class="rpxe9ibnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:more-vertical-fill"} {...others} />);
}

export default Component;
