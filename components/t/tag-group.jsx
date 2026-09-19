import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjnq2n03l.css';
import '../../css/d/dkx4dmkzu.css';
import '../../css/t/tq0faab8f.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="mjnq2n03l"/><path class="dkx4dmkzu"/><path class="tq0faab8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tag-group"} {...others} />);
}

export default Component;
