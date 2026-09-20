import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0nm-3j1m.css';
import '../../css/o/o4qm4qbec.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="v0nm-3j1m"/><path class="o4qm4qbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wealthfolio"} {...others} />);
}

export default Component;
