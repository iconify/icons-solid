import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfm1etoml.css';
import '../../css/t/tg8jb6oai.css';
import '../../css/f/fdrpmfhbn.css';
import '../../css/o/og4dv3brq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mfm1etoml"/><path class="tg8jb6oai"/><circle class="fdrpmfhbn"/><path class="og4dv3brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:medication-alert"} {...others} />);
}

export default Component;
