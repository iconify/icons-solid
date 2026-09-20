import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grb9lfb6x.css';
import '../../css/n/n3dlx8buc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="grb9lfb6x"/><path class="n3dlx8buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink-light"} {...others} />);
}

export default Component;
