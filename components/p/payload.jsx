import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iycln-b8i.css';
import '../../css/d/da-apvk5z.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="iycln-b8i"/><path class="da-apvk5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:payload"} {...others} />);
}

export default Component;
