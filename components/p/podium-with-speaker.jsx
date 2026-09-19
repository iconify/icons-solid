import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-64jpb0f.css';
import '../../css/w/ww0o6ub_a.css';
import '../../css/z/z9ok8cc2s.css';
import '../../css/k/k3kq6zb1y.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="a-64jpb0f"/><path class="ww0o6ub_a"/><path class="z9ok8cc2s"/><path class="k3kq6zb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:podium-with-speaker"} {...others} />);
}

export default Component;
