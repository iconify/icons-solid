import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7m_-rsmc.css';
import '../../css/g/go7xeob4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g7m_-rsmc"/><path class="go7xeob4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vertigo-comics-light"} {...others} />);
}

export default Component;
